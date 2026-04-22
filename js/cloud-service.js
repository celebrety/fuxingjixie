// ============================================================
//  云端数据服务（Supabase）- 全局定义，H5和Web端都能访问
//  从 JSONBin.io 迁移到 Supabase 以解决并发数据丢失问题
// ============================================================
const CLOUD_CONFIG = {
    // Supabase 云端数据服务配置
    // 项目地址: https://supabase.com/dashboard/project/sjpkjfpaocswveydbxvc
    SUPABASE_URL: 'https://sjpkjfpaocswveydbxvc.supabase.co',
    SUPABASE_KEY: 'sb_publishable_RbIuhqGsWbNzfNE-cXiZNA_7BR1_1fM'
};

// 检查云端服务是否已配置
function isCloudConfigured() {
    return CLOUD_CONFIG.SUPABASE_KEY !== 'YOUR_SUPABASE_ANON_KEY';
}

/**
 * 通用的 Supabase 请求封装
 * @param {string} table 表名
 * @param {string} method 方法 (GET, POST, PATCH, DELETE)
 * @param {object} options 附加选项 (query, body)
 */
async function supabaseRequest(table, method = 'GET', options = {}) {
    if (!isCloudConfigured()) {
        console.warn('Supabase 服务未配置');
        return null;
    }

    const { query = '', body = null } = options;
    const url = `${CLOUD_CONFIG.SUPABASE_URL}/rest/v1/${table}${query}`;
    
    const headers = {
        'apikey': CLOUD_CONFIG.SUPABASE_KEY,
        'Authorization': `Bearer ${CLOUD_CONFIG.SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
    };

    try {
        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: body ? JSON.stringify(body) : null
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Supabase ${method} ${table} 失败:`, error);
        throw error;
    }
}

// 从云端获取留言数据
async function fetchMessagesFromCloud() {
    try {
        // 获取所有留言，按创建时间倒序排列
        const messages = await supabaseRequest('messages', 'GET', {
            query: '?select=*&order=id.desc'
        });
        
        if (messages) {
            // 同步到本地缓存
            try {
                localStorage.setItem('fx_messages', JSON.stringify(messages));
            } catch(e) {
                console.warn('本地缓存失败:', e);
            }
        }
        
        return messages;
    } catch (error) {
        return null;
    }
}

// 保存单条留言到云端 (替代之前的全量保存，解决并发冲突)
async function saveSingleMessageToCloud(message) {
    if (!isCloudConfigured()) {
        // 加入重试队列
        _addToRetryQueue(message);
        return false;
    }

    try {
        // Supabase 插入单条记录
        const result = await supabaseRequest('messages', 'POST', {
            body: message
        });
        
        if (result) {
            console.log('留言已成功保存到 Supabase');
            return true;
        }
        return false;
    } catch (error) {
        console.error('保存留言失败，加入重试队列');
        _addToRetryQueue(message);
        return false;
    }
}

// 保持接口兼容性：原来的全量保存函数现在只用于兼容
// 在 Supabase 模式下，我们不推荐全量覆盖
async function saveMessagesToCloud(messages) {
    console.warn('警告: saveMessagesToCloud 在 Supabase 模式下已被弃用，请使用 saveSingleMessageToCloud');
    // 如果是新留言提交，我们通常只关心最新的一条
    if (messages && messages.length > 0) {
        return await saveSingleMessageToCloud(messages[0]);
    }
    return false;
}

// 从云端获取图片配置
async function fetchImagesFromCloud() {
    try {
        const data = await supabaseRequest('images_config', 'GET', {
            query: '?select=*'
        });
        
        if (data) {
            // 将 [{key: '...', url: '...'}] 转换为 {key: url} 格式
            const images = {};
            data.forEach(item => {
                images[item.key] = item.url;
            });
            
            // 同步到本地缓存
            try {
                localStorage.setItem('fx_images', JSON.stringify(images));
            } catch(e) {
                console.warn('本地缓存失败:', e);
            }
            return images;
        }
        return null;
    } catch (error) {
        return null;
    }
}

// 保存图片配置到云端
async function saveImagesToCloud(images) {
    try {
        // Supabase 支持 upsert (存在则更新，不存在则插入)
        // PostgREST 的 upsert 通过 POST + Prefer: resolution=merge-duplicates 实现
        // 或者简单的循环处理（图片配置通常不多）
        const keys = Object.keys(images);
        const promises = keys.map(key => {
            return supabaseRequest('images_config', 'POST', {
                body: { key: key, url: images[key] }
            }).catch(async (e) => {
                // 如果插入失败（可能已存在），尝试更新
                return supabaseRequest('images_config', 'PATCH', {
                    query: `?key=eq.${key}`,
                    body: { url: images[key] }
                });
            });
        });
        
        await Promise.all(promises);
        console.log('图片配置已同步到 Supabase');
        return true;
    } catch (error) {
        console.error('同步图片配置失败:', error);
        return false;
    }
}

// ════════════════════════════════════════════
//  留言数据重试队列：页面存活期间持续重试同步
// ════════════════════════════════════════════
var _retryQueue = [];
var _retryTimer = null;

function _addToRetryQueue(message) {
    _retryQueue.push({ message: message, addedAt: Date.now() });
    _scheduleRetry();
}

function _scheduleRetry() {
    if (_retryTimer) return;
    _retryTimer = setInterval(_processRetryQueue, 30000); // 每30秒重试一次
    setTimeout(_processRetryQueue, 5000);
}

async function _processRetryQueue() {
    if (_retryQueue.length === 0) {
        if (_retryTimer) {
            clearInterval(_retryTimer);
            _retryTimer = null;
        }
        return;
    }

    const item = _retryQueue[0];
    console.log('重试队列：尝试同步留言到 Supabase, 剩余 ' + _retryQueue.length + ' 条...');

    try {
        const result = await supabaseRequest('messages', 'POST', {
            body: item.message
        });

        if (result) {
            console.log('重试队列：留言同步成功！');
            _retryQueue.shift();
        }
    } catch (error) {
        console.warn('重试队列：同步失败，下次继续:', error.message);
    }
}

/**
 * 从 Supabase 获取展示项目（设备/产品）
 * @param {string} category - 分类: 'equipment' 或 'product'
 * @returns {Promise<Array>} 展示项目列表
 */
async function fetchDisplayItems(category) {
    if (!isCloudConfigured()) {
        console.warn('Supabase 服务未配置');
        return [];
    }

    try {
        const query = `?category=eq.${category}&is_active=eq.true&order=sort_order.asc`;
        const items = await supabaseRequest('display_items', 'GET', { query });
        
        return items || [];
    } catch (error) {
        console.error('获取展示项目失败:', error);
        return [];
    }
}
