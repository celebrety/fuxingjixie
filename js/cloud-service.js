// ============================================================
//  云端数据服务（JSONBin.io）- 全局定义，H5和Web端都能访问
// ============================================================
const CLOUD_CONFIG = {
    // JSONBin.io 云端数据服务配置
    API_KEY: '$2a$10$hkJ46s.iu9JG/vLvoY1rSuae.MdIbokPR930292VONU37AivGtrM6',
    MESSAGES_BIN_ID: '69e65c4faaba8821971c6129',
    IMAGES_BIN_ID: '69e65cc9856a6821895432d6'
};

// 检查云端服务是否已配置
function isCloudConfigured() {
    return CLOUD_CONFIG.API_KEY !== 'YOUR_JSONBIN_API_KEY' &&
           CLOUD_CONFIG.MESSAGES_BIN_ID !== 'YOUR_MESSAGES_BIN_ID';
}

// 从云端获取留言数据
async function fetchMessagesFromCloud() {
    if (!isCloudConfigured()) {
        console.warn('云端服务未配置，使用本地数据');
        return null;
    }
    
    try {
        // 添加时间戳避免缓存
        const timestamp = Date.now();
        const response = await fetch(`https://api.jsonbin.io/v3/b/${CLOUD_CONFIG.MESSAGES_BIN_ID}/latest?t=${timestamp}`, {
            method: 'GET',
            headers: {
                'X-Master-Key': CLOUD_CONFIG.API_KEY
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const messages = data.record.messages || [];
        
        // 同步到本地缓存
        try {
            localStorage.setItem('fx_messages', JSON.stringify(messages));
        } catch(e) {
            console.warn('本地缓存失败:', e);
        }
        
        return messages;
    } catch (error) {
        console.error('获取云端留言失败:', error);
        return null;
    }
}

// 保存留言数据到云端（带重试机制，确保数据不丢失）
async function saveMessagesToCloud(messages, maxRetries) {
    if (!isCloudConfigured()) {
        console.warn('云端服务未配置，仅保存到本地');
        return false;
    }

    maxRetries = maxRetries || 5;
    let lastError = null;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(`https://api.jsonbin.io/v3/b/${CLOUD_CONFIG.MESSAGES_BIN_ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': CLOUD_CONFIG.API_KEY
                },
                body: JSON.stringify({ messages: messages })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log('留言已保存到云端' + (attempt > 1 ? ' (重试第' + (attempt-1) + '次成功)' : ''));
            // 同时保存到本地缓存
            try {
                localStorage.setItem('fx_messages', JSON.stringify(messages));
            } catch(e) {
                console.warn('本地缓存失败:', e);
            }
            return true;
        } catch (error) {
            lastError = error;
            console.error('保存留言到云端失败 (第' + attempt + '/' + maxRetries + '次):', error.message);

            if (attempt < maxRetries) {
                // 指数退避：1s, 2s, 4s, 8s...
                var delay = Math.min(1000 * Math.pow(2, attempt - 1), 10000);
                console.log('将在 ' + delay + 'ms 后重试...');
                await new Promise(function(resolve) { setTimeout(resolve, delay); });
            }
        }
    }

    // 所有重试都失败，保存到本地作为兜底
    console.error('云端保存全部失败，已保存到本地缓存:', lastError);
    try {
        localStorage.setItem('fx_messages', JSON.stringify(messages));
    } catch(e) {
        console.warn('本地缓存失败:', e);
    }
    // 将未同步数据加入待重试队列
    _addToRetryQueue(messages);
    return false;
}

// 从云端获取图片配置
async function fetchImagesFromCloud() {
    if (!isCloudConfigured()) {
        console.warn('云端服务未配置，使用本地图片');
        return null;
    }
    
    try {
        // 添加时间戳避免缓存
        const timestamp = Date.now();
        const response = await fetch(`https://api.jsonbin.io/v3/b/${CLOUD_CONFIG.IMAGES_BIN_ID}/latest?t=${timestamp}`, {
            method: 'GET',
            headers: {
                'X-Master-Key': CLOUD_CONFIG.API_KEY
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const images = data.record.images || {};
        
        // 同步到本地缓存
        try {
            localStorage.setItem('fx_images', JSON.stringify(images));
        } catch(e) {
            console.warn('本地缓存失败:', e);
        }
        
        return images;
    } catch (error) {
        console.error('获取云端图片配置失败:', error);
        return null;
    }
}

// 保存图片配置到云端
async function saveImagesToCloud(images) {
    if (!isCloudConfigured()) {
        console.warn('云端服务未配置，仅保存到本地');
        return false;
    }
    
    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${CLOUD_CONFIG.IMAGES_BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': CLOUD_CONFIG.API_KEY
            },
            body: JSON.stringify({ images: images })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        console.log('图片配置已保存到云端');
        return true;
    } catch (error) {
        console.error('保存图片配置到云端失败:', error);
        return false;
    }
}

// ════════════════════════════════════════════
//  留言数据重试队列：页面存活期间持续重试同步
// ════════════════════════════════════════════
var _retryQueue = [];
var _retryTimer = null;

function _addToRetryQueue(messages) {
    _retryQueue.push({ messages: messages, addedAt: Date.now() });
    _scheduleRetry();
}

function _scheduleRetry() {
    if (_retryTimer) return; // 已有定时器在运行
    _retryTimer = setInterval(_processRetryQueue, 30000); // 每30秒重试一次
    // 5秒后首次重试
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

    var item = _retryQueue[0];
    console.log('重试队列：尝试同步留言到云端, 剩余 ' + _retryQueue.length + ' 条...');

    try {
        // 重新获取云端最新数据并合并，避免覆盖其他端新增的留言
        var cloudMessages = await fetchMessagesFromCloud();
        if (cloudMessages !== null) {
            // 合并：以云端为基准，添加本地未同步的留言（按id去重）
            var cloudIds = {};
            cloudMessages.forEach(function(m) { cloudIds[m.id] = true; });
            var newOnly = item.messages.filter(function(m) { return !cloudIds[m.id]; });
            var merged = newOnly.concat(cloudMessages);

            var response = await fetch(`https://api.jsonbin.io/v3/b/${CLOUD_CONFIG.MESSAGES_BIN_ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': CLOUD_CONFIG.API_KEY
                },
                body: JSON.stringify({ messages: merged })
            });

            if (response.ok) {
                console.log('重试队列：留言同步到云端成功！');
                _retryQueue.shift(); // 移除已成功的
                try {
                    localStorage.setItem('fx_messages', JSON.stringify(merged));
                } catch(e) {}
                return;
            }
        }
    } catch (error) {
        console.warn('重试队列：同步失败，下次继续:', error.message);
    }
}
