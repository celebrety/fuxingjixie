// ═══════════════════════════════════════════
//  设备/产品管理 (Display Items)
//  用于 admin.html 的动态设备和产品管理
// ═══════════════════════════════════════════

// 分类配置
const DISPLAY_ITEM_CONFIG = {
  equipment: {
    title: '设备',
    tags: ['数控机床', '线切割', '其他设备']
  },
  product: {
    title: '产品',
    tags: ['齿轮', '轴类', '模具', '结构件', '法兰', '壳体', '支架', '键槽']
  }
};

// 加载设备/产品列表
async function loadDisplayItems(category) {
  try {
    console.log('加载显示项目:', category);
    console.log('CLOUD_CONFIG:', CLOUD_CONFIG);
    
    const url = `${CLOUD_CONFIG.SUPABASE_URL}/rest/v1/display_items?category=eq.${category}&order=sort_order.asc`;
    console.log('请求URL:', url);
    
    const response = await fetch(url, {
      headers: {
        'apikey': CLOUD_CONFIG.SUPABASE_KEY,
        'Authorization': `Bearer ${CLOUD_CONFIG.SUPABASE_KEY}`
      }
    });
    
    console.log('响应状态:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('加载失败详情:', errorText);
      throw new Error(`加载失败 (${response.status}): ${errorText}`);
    }
    
    const data = await response.json();
    console.log('加载成功，数据条数:', data.length);
    return data;
  } catch (error) {
    console.error('加载显示项目失败:', error);
    toast('加载失败: ' + error.message, '#ef4444');
    return [];
  }
}

// 刷新设备/产品列表
async function refreshDisplayItems(category) {
  toast('正在刷新...', '#3b82f6');
  await renderDisplayItemList(category);
  toast('刷新成功', '#22c55e');
}

// 渲染设备/产品列表
async function renderDisplayItemList(category) {
  console.log('渲染显示项目列表:', category);
  
  const tbody = document.getElementById(category === 'equipment' ? 'equipmentBody' : 'productBody');
  
  if (!tbody) {
    console.error('找不到 tbody 元素:', category === 'equipment' ? 'equipmentBody' : 'productBody');
    toast('页面元素缺失，请刷新页面', '#ef4444');
    return;
  }
  
  const items = await loadDisplayItems(category);
  
  if (!items || items.length === 0) {
    const emptyIcon = category === 'equipment' ? '⚙️' : '🔧';
    const emptyTitle = category === 'equipment' ? '设备' : '产品';
    tbody.innerHTML = `
      <tr>
        <td colspan="7">
          <div class="empty-state">
            <div class="empty-icon">${emptyIcon}</div>
            <div class="empty-text">暂无${emptyTitle}数据</div>
            <div class="empty-hint">请点击“✨ 添加${emptyTitle}”按钮添加第一条数据</div>
          </div>
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = items.map(item => {
    const specsCount = item.specs ? item.specs.length : 0;
    const tagsStr = item.tags ? item.tags.join(', ') : '';
    const statusText = item.is_active ? '<span style="color:#22c55e;font-weight:600">启用</span>' : '<span style="color:#999">禁用</span>';
    
    // 处理图片显示：优先使用 image_url，其次使用 image_key
    let imageHtml;
    if (item.image_url) {
      imageHtml = `<img src="${item.image_url}" style="width:100%;height:100%;object-fit:cover;cursor:pointer" onclick="previewItemImage('${item.image_url}', '${item.title_zh}')" onerror="this.parentElement.innerHTML='<div class='image-placeholder'>加载失败</div>'">`;
    } else if (item.image_key) {
      imageHtml = `<div class="image-placeholder"><div>需在页面图片中配置</div><div class="image-key">${item.image_key}</div></div>`;
    } else {
      imageHtml = '<div class="image-placeholder">无图片</div>';
    }
    
    return `
      <tr>
        <td style="font-weight:600;color:var(--primary)">${item.sort_order}</td>
        <td>
          <div class="image-cell">
            ${imageHtml}
          </div>
        </td>
        <td><strong style="color:var(--primary)">${item.title_zh}</strong></td>
        <td><span style="background:#e0e7ff;color:#3730a3;padding:4px 10px;border-radius:12px;font-size:12px;font-weight:500">${category === 'equipment' ? (item.tags ? item.tags[0] : '-') : tagsStr}</span></td>
        <td style="text-align:center;font-weight:600">${specsCount}</td>
        <td>${statusText}</td>
        <td>
          <div class="action-group">
            <button class="btn-small btn-primary" onclick="editDisplayItem('${item.id}', '${category}')">编辑</button>
            <button class="btn-small btn-danger" onclick="deleteDisplayItem('${item.id}', '${category}')">删除</button>
            <button class="btn-small btn-icon" onclick="moveItem('${item.id}', '${category}', 'up')" title="上移">↑</button>
            <button class="btn-small btn-icon" onclick="moveItem('${item.id}', '${category}', 'down')" title="下移">↓</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
  
  console.log('渲染完成');
}

// 打开添加/编辑模态框
function openDisplayItemModal(category, item = null) {
  const modal = document.getElementById('displayItemModal');
  const title = document.getElementById('displayItemModalTitle');
  const config = DISPLAY_ITEM_CONFIG[category];
  
  title.textContent = item ? `编辑${config.title}` : `添加${config.title}`;
  
  // 填充分类选项
  const tagSelect = document.getElementById('item-tag');
  tagSelect.innerHTML = '<option value="">请选择分类</option>' + 
    config.tags.map(tag => `<option value="${tag}">${tag}</option>`).join('');
  
  // 重置表单
  document.getElementById('displayItemForm').reset();
  document.getElementById('item-category').value = category;
  document.getElementById('specs-container').innerHTML = '';
  document.getElementById('item-image-preview').innerHTML = '<span style="color:#999">图片预览</span>';
  
  if (item) {
    // 编辑模式：填充数据
    document.getElementById('item-id').value = item.id;
    document.getElementById('item-sort').value = item.sort_order;
    document.getElementById('item-title-zh').value = item.title_zh || '';
    document.getElementById('item-title-en').value = item.title_en || '';
    document.getElementById('item-title-ja').value = item.title_ja || '';
    document.getElementById('item-image-key').value = item.image_key || '';
    document.getElementById('item-image-url').value = item.image_url || '';
    document.getElementById('item-desc-zh').value = item.description_zh || '';
    document.getElementById('item-desc-en').value = item.description_en || '';
    document.getElementById('item-desc-ja').value = item.description_ja || '';
    document.getElementById('item-active').checked = item.is_active !== false;
    
    if (item.tags && item.tags.length > 0) {
      document.getElementById('item-tag').value = item.tags[0];
      document.getElementById('item-tags').value = item.tags.join(', ');
    }
    
    if (item.specs && item.specs.length > 0) {
      item.specs.forEach(spec => addSpecRow(spec.label, spec.value));
    }
    
    if (item.image_url) {
      document.getElementById('item-image-preview').innerHTML = 
        `<img src="${item.image_url}" style="width:100%;height:100%;object-fit:cover">`;
    }
  }
  
  modal.classList.add('show');
}

// 关闭模态框
function closeDisplayItemModal() {
  document.getElementById('displayItemModal').classList.remove('show');
}

// 添加规格行
function addSpecRow(label = '', value = '') {
  const container = document.getElementById('specs-container');
  const index = container.children.length;
  
  const row = document.createElement('div');
  row.className = 'form-row';
  row.style.marginBottom = '8px';
  row.innerHTML = `
    <div class="form-group" style="flex:1">
      <input type="text" class="inp spec-label" placeholder="规格名称" value="${label}" style="margin:0">
    </div>
    <div class="form-group" style="flex:1">
      <input type="text" class="inp spec-value" placeholder="规格值" value="${value}" style="margin:0">
    </div>
    <button type="button" class="btn-small btn-danger" onclick="this.parentElement.remove()">删除</button>
  `;
  
  container.appendChild(row);
}

// 处理表单提交
async function handleDisplayItemSubmit(event) {
  event.preventDefault();
  
  try {
    const id = document.getElementById('item-id').value;
    const category = document.getElementById('item-category').value;
    
    // 收集规格参数
    const specs = [];
    document.querySelectorAll('#specs-container .form-row').forEach(row => {
      const label = row.querySelector('.spec-label').value.trim();
      const value = row.querySelector('.spec-value').value.trim();
      if (label && value) {
        specs.push({ label, value });
      }
    });
    
    // 收集标签
    const tagsStr = document.getElementById('item-tags').value.trim();
    const tags = tagsStr ? tagsStr.split(/[,，]/).map(t => t.trim()).filter(t => t) : [];
    
    const itemData = {
      category,
      sort_order: parseInt(document.getElementById('item-sort').value),
      title_zh: document.getElementById('item-title-zh').value.trim(),
      title_en: document.getElementById('item-title-en').value.trim(),
      title_ja: document.getElementById('item-title-ja').value.trim(),
      description_zh: document.getElementById('item-desc-zh').value.trim(),
      description_en: document.getElementById('item-desc-en').value.trim(),
      description_ja: document.getElementById('item-desc-ja').value.trim(),
      image_url: document.getElementById('item-image-url').value.trim(),
      image_key: document.getElementById('item-image-key').value.trim(),
      specs,
      tags,
      is_active: document.getElementById('item-active').checked
    };
    
    // 保存到 Supabase
    await saveDisplayItem(id, itemData);
    
    closeDisplayItemModal();
    await renderDisplayItemList(category);
    toast('保存成功', '#22c55e');
  } catch (error) {
    console.error('保存失败:', error);
    toast('保存失败: ' + error.message, '#ef4444');
  }
}

// 保存设备/产品
async function saveDisplayItem(id, itemData) {
  try {
    let url, method;
    
    if (id) {
      // 更新
      url = `${CLOUD_CONFIG.SUPABASE_URL}/rest/v1/display_items?id=eq.${id}`;
      method = 'PATCH';
    } else {
      // 新增
      url = `${CLOUD_CONFIG.SUPABASE_URL}/rest/v1/display_items`;
      method = 'POST';
    }
    
    const response = await fetch(url, {
      method,
      headers: {
        'apikey': CLOUD_CONFIG.SUPABASE_KEY,
        'Authorization': `Bearer ${CLOUD_CONFIG.SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(itemData)
    });
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }
    
    return await response.json();
  } catch (error) {
    console.error('保存显示项目失败:', error);
    throw error;
  }
}

// 编辑设备/产品
async function editDisplayItem(id, category) {
  const items = await loadDisplayItems(category);
  const item = items.find(i => i.id === id);
  
  if (item) {
    openDisplayItemModal(category, item);
  }
}

// 删除设备/产品
async function deleteDisplayItem(id, category) {
  if (!confirm('确定要删除这条记录吗？此操作不可恢复。')) {
    return;
  }
  
  try {
    const url = `${CLOUD_CONFIG.SUPABASE_URL}/rest/v1/display_items?id=eq.${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'apikey': CLOUD_CONFIG.SUPABASE_KEY,
        'Authorization': `Bearer ${CLOUD_CONFIG.SUPABASE_KEY}`
      }
    });
    
    if (!response.ok) throw new Error('删除失败');
    
    await renderDisplayItemList(category);
    toast('删除成功', '#22c55e');
  } catch (error) {
    console.error('删除失败:', error);
    toast('删除失败: ' + error.message, '#ef4444');
  }
}

// 上移/下移
async function moveItem(id, category, direction) {
  const items = await loadDisplayItems(category);
  const index = items.findIndex(item => item.id === id);
  
  if (direction === 'up' && index > 0) {
    const temp = items[index].sort_order;
    items[index].sort_order = items[index-1].sort_order;
    items[index-1].sort_order = temp;
    
    await Promise.all([
      saveDisplayItem(items[index].id, items[index]),
      saveDisplayItem(items[index-1].id, items[index-1])
    ]);
    
    await renderDisplayItemList(category);
    toast('排序已更新', '#22c55e');
  } else if (direction === 'down' && index < items.length - 1) {
    const temp = items[index].sort_order;
    items[index].sort_order = items[index+1].sort_order;
    items[index+1].sort_order = temp;
    
    await Promise.all([
      saveDisplayItem(items[index].id, items[index]),
      saveDisplayItem(items[index+1].id, items[index+1])
    ]);
    
    await renderDisplayItemList(category);
    toast('排序已更新', '#22c55e');
  }
}

// 初始化图片预览监听
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImagePreview);
  } else {
    setTimeout(initImagePreview, 100);
  }
  
  function initImagePreview() {
    const imageUrlInput = document.getElementById('item-image-url');
    if (imageUrlInput) {
      imageUrlInput.addEventListener('input', function() {
        const url = this.value.trim();
        const preview = document.getElementById('item-image-preview');
        
        if (url) {
          preview.innerHTML = `<img src="${url}" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.innerHTML='<span style=\"color:#ef4444\">图片加载失败</span>'">`;
        } else {
          preview.innerHTML = '<span style="color:#999">图片预览</span>';
        }
      });
    }
  }
})();

// 预览设备/产品图片（放大查看）
function previewItemImage(imageUrl, title) {
  if (!imageUrl) return;
  
  const modal = document.createElement('div');
  modal.className = 'image-preview-modal';
  modal.innerHTML = `
    <div class="image-preview-overlay" onclick="closeImagePreview()"></div>
    <div class="image-preview-content">
      <button class="image-preview-close" onclick="closeImagePreview()">✕</button>
      <div class="image-preview-title">${title}</div>
      <img src="${imageUrl}" class="image-preview-img" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23f0f0f0%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-size=%2216%22%3E图片加载失败%3C/text%3E%3C/svg%3E'">
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  // 添加样式
  if (!document.getElementById('image-preview-styles')) {
    const style = document.createElement('style');
    style.id = 'image-preview-styles';
    style.textContent = `
      .image-preview-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .image-preview-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
      }
      .image-preview-content {
        position: relative;
        z-index: 1;
        max-width: 90%;
        max-height: 90%;
        background: white;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }
      .image-preview-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: white;
        border: none;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        transition: all 0.2s;
      }
      .image-preview-close:hover {
        transform: scale(1.1);
        background: #f5f5f5;
      }
      .image-preview-title {
        font-size: 18px;
        font-weight: 600;
        color: #1a3a5c;
        margin-bottom: 16px;
        text-align: center;
      }
      .image-preview-img {
        max-width: 100%;
        max-height: calc(90vh - 120px);
        object-fit: contain;
        border-radius: 8px;
        display: block;
      }
    `;
    document.head.appendChild(style);
  }
}

// 关闭图片预览
function closeImagePreview() {
  const modal = document.querySelector('.image-preview-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
  }
}

// 触发图片上传
function triggerImageUpload() {
  document.getElementById('item-image-file').click();
}

// 处理图片上传
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  // 验证文件类型
  if (!file.type.startsWith('image/')) {
    toast('请选择图片文件', '#ef4444');
    return;
  }
  
  // 验证文件大小（500KB）
  if (file.size > 500 * 1024) {
    toast('图片大小不能超过500KB', '#ef4444');
    return;
  }
  
  toast('正在处理图片...', '#3b82f6');
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const base64Data = e.target.result;
    
    // 更新预览
    const preview = document.getElementById('item-image-preview');
    preview.innerHTML = `<img src="${base64Data}" style="width:100%;height:100%;object-fit:cover">`;
    
    // 将 base64 数据存入 image_url 字段
    document.getElementById('item-image-url').value = base64Data;
    
    toast('图片已加载，请保存以生效', '#22c55e');
  };
  
  reader.onerror = function() {
    toast('图片读取失败', '#ef4444');
  };
  
  reader.readAsDataURL(file);
}
