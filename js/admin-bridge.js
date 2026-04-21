(function() {
    'use strict';
    
    // H5端CSS类名映射到云端ID
    const H5_CLASS_MAPPING = {
        'equip-card-img-bg1': 'equip-cnc1',
        'equip-card-img-bg2': 'equip-cnc2',
        'equip-card-img-bg3': 'equip-cnc3',
        'equip-card-img-bg4': 'equip-wire1',
        'equip-card-img-bg5': 'equip-wire2',
        'equip-card-img-bg6': 'equip-edm1',
        'pc-img-1': 'prod-1',
        'pc-img-2': 'prod-2',
        'pc-img-3': 'prod-3',
        'pc-img-4': 'prod-4',
        'pc-img-5': 'prod-5',
        'pc-img-6': 'prod-6',
        'pc-img-7': 'prod-7'
        // 注意：H5端有8个产品卡片，但云端只配置了7个
    };
    
    async function applyCustomImages() {
        try {
            // 优先从云端获取图片配置
            let imgs = {};
            
            // 检查云端配置是否可用
            if (typeof isCloudConfigured === 'function' && isCloudConfigured() && 
                typeof fetchImagesFromCloud === 'function') {
                try {
                    const cloudImages = await fetchImagesFromCloud();
                    if (cloudImages && typeof cloudImages === 'object') {
                        imgs = cloudImages;
                        console.log('已从云端加载图片配置');
                    }
                } catch(e) {
                    console.warn('云端图片加载失败，使用本地缓存:', e);
                }
            }
            
            // 如果云端没有数据，回退到本地缓存
            if (Object.keys(imgs).length === 0) {
                imgs = JSON.parse(localStorage.getItem('fx_images') || '{}');
            }
            
            if (!imgs || Object.keys(imgs).length === 0) return;
            
            console.log('开始应用自定义图片，共', Object.keys(imgs).length, '张');
            
            // 1. 处理Web端（通过ID查找）
            Object.keys(imgs).forEach(function(id) {
                if (!imgs[id]) return;
                var el = document.getElementById('fx-img-' + id);
                if (el) {
                    el.style.backgroundImage = 'url("' + imgs[id] + '")';
                    el.style.backgroundSize = 'cover';
                    el.style.backgroundPosition = 'center';
                    el.style.backgroundRepeat = 'no-repeat';
                    
                    // 隐藏默认emoji和占位符
                    var emoji = el.querySelector('.equipment-emoji, .product-emoji');
                    if (emoji) emoji.style.display = 'none';
                    var span = el.querySelector('span[style*="font-size:90px"]');
                    if (span) span.style.display = 'none';
                    console.log('Web端已加载图片:', id);
                }
            });
            
            // 2. 处理H5端（通过CSS类名查找）
            Object.keys(H5_CLASS_MAPPING).forEach(function(cssClass) {
                var cloudId = H5_CLASS_MAPPING[cssClass];
                if (!imgs[cloudId]) return;
                
                // 查找所有使用该CSS类的元素
                var elements = document.querySelectorAll('.' + cssClass);
                elements.forEach(function(el) {
                    el.style.backgroundImage = 'url("' + imgs[cloudId] + '")';
                    el.style.backgroundSize = 'cover';
                    el.style.backgroundPosition = 'center';
                    el.style.backgroundRepeat = 'no-repeat';
                    
                    // 隐藏默认emoji
                    var emojiSpan = el.querySelector('span:not(.equip-card-tag)');
                    if (emojiSpan && emojiSpan.textContent.length <= 2) {
                        emojiSpan.style.display = 'none';
                    }
                    console.log('H5端已加载图片:', cloudId, '->', cssClass);
                });
            });
            
        } catch(e) {
            console.warn('Failed to load custom images:', e);
        }
    }
    
    // DOM加载完成后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyCustomImages);
    } else {
        // DOM已就绪，延迟一点执行确保所有元素已渲染
        setTimeout(applyCustomImages, 100);
    }
    
    // 监听localStorage变化（用于同浏览器不同标签页同步）
    window.addEventListener('storage', function(e) {
        if (e.key === 'fx_images') {
            setTimeout(applyCustomImages, 50);
        }
    });
})();
