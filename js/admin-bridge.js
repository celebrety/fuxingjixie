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
            // 1. 加载传统图片配置 (images_config)
            let imgs = {};
            
            if (typeof isCloudConfigured === 'function' && isCloudConfigured() && 
                typeof fetchImagesFromCloud === 'function') {
                try {
                    const cloudImages = await fetchImagesFromCloud();
                    if (cloudImages && typeof cloudImages === 'object') {
                        imgs = cloudImages;
                        console.log('已从云端加载传统图片配置');
                    }
                } catch(e) {
                    console.warn('云端图片加载失败，使用本地缓存:', e);
                }
            }
            
            if (Object.keys(imgs).length === 0) {
                imgs = JSON.parse(localStorage.getItem('fx_images') || '{}');
            }
            
            // 2. 应用传统图片
            applyTraditionalImages(imgs);
            
            // 3. 加载并应用展示项目图片 (display_items)
            if (typeof fetchDisplayItems === 'function') {
                try {
                    const [equipment, products] = await Promise.all([
                        fetchDisplayItems('equipment'),
                        fetchDisplayItems('product')
                    ]);
                    
                    const allItems = [...equipment, ...products];
                    applyDisplayItemImages(allItems);
                    console.log('已加载并应用展示项目图片，共', allItems.length, '个');
                } catch(e) {
                    console.warn('展示项目图片加载失败:', e);
                }
            }
            
        } catch(e) {
            console.warn('Failed to load custom images:', e);
        }
    }
    
    /**
     * 应用传统图片配置
     */
    function applyTraditionalImages(imgs) {
        if (!imgs) imgs = {};
        
        console.log('开始应用传统图片配置，共', Object.keys(imgs).length, '张');
        
        // 1. 处理Web端（通过ID查找）
        // 首先清除所有fx-img-元素图片，然后根据imgs重新应用
        var allWebElements = document.querySelectorAll('[id^="fx-img-"]');
        allWebElements.forEach(function(el) {
            // 清除背景图
            el.style.backgroundImage = '';
            el.style.backgroundSize = '';
            el.style.backgroundPosition = '';
            el.style.backgroundRepeat = '';
            
            // 显示默认emoji和占位符
            var emoji = el.querySelector('.equipment-emoji, .product-emoji');
            if (emoji) emoji.style.display = '';
            var span = el.querySelector('span[style*="font-size:90px"]');
            if (span) span.style.display = '';
        });
        
        // 然后应用有图片的元素
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
            }
        });
        
        // 2. 处理H5端（通过CSS类名查找）
        // 首先清除所有H5端图片
        Object.keys(H5_CLASS_MAPPING).forEach(function(cssClass) {
            var elements = document.querySelectorAll('.' + cssClass);
            elements.forEach(function(el) {
                el.style.backgroundImage = '';
                el.style.backgroundSize = '';
                el.style.backgroundPosition = '';
                el.style.backgroundRepeat = '';
                
                var emojiSpan = el.querySelector('span:not(.equip-card-tag)');
                if (emojiSpan && emojiSpan.textContent.length <= 2) {
                    emojiSpan.style.display = '';
                }
            });
        });
        
        // 然后应用有图片的元素
        Object.keys(H5_CLASS_MAPPING).forEach(function(cssClass) {
            var cloudId = H5_CLASS_MAPPING[cssClass];
            if (!imgs[cloudId]) return;
            
            var elements = document.querySelectorAll('.' + cssClass);
            elements.forEach(function(el) {
                el.style.backgroundImage = 'url("' + imgs[cloudId] + '")';
                el.style.backgroundSize = 'cover';
                el.style.backgroundPosition = 'center';
                el.style.backgroundRepeat = 'no-repeat';
                
                var emojiSpan = el.querySelector('span:not(.equip-card-tag)');
                if (emojiSpan && emojiSpan.textContent.length <= 2) {
                    emojiSpan.style.display = 'none';
                }
            });
        });
    }
    
    /**
     * 应用展示项目图片
     */
    function applyDisplayItemImages(items) {
        if (!items || items.length === 0) return;
        
        // 首先清除所有fx-img-元素的display_items图片
        var allWebElements = document.querySelectorAll('[id^="fx-img-"]');
        allWebElements.forEach(function(el) {
            // 只清除由display_items设置的图片（通过检查是否有image_key）
            var emoji = el.querySelector('.equipment-emoji, .product-emoji');
            if (emoji && emoji.style.display === 'none') {
                // 如果emoji被隐藏了，先恢复
                el.style.backgroundImage = '';
                el.style.backgroundSize = '';
                el.style.backgroundPosition = '';
                el.style.backgroundRepeat = '';
                emoji.style.display = '';
            }
        });
        
        // 然后应用有图片的展示项目
        items.forEach(function(item) {
            if (!item.image_url || !item.image_key) return;
            
            // Web 端
            var webEl = document.getElementById('fx-img-' + item.image_key);
            if (webEl) {
                webEl.style.backgroundImage = 'url("' + item.image_url + '")';
                webEl.style.backgroundSize = 'cover';
                webEl.style.backgroundPosition = 'center';
                webEl.style.backgroundRepeat = 'no-repeat';
                
                var emoji = webEl.querySelector('.equipment-emoji, .product-emoji');
                if (emoji) emoji.style.display = 'none';
            }
            
            // H5 端也需要处理（通过已有的 H5_CLASS_MAPPING）
            // 注意：动态渲染的H5元素已经内联了背景图，这里主要是兼容静态HTML
        });
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
            console.log('检测到 fx_images 变化，重新应用图片');
            setTimeout(applyCustomImages, 50);
        }
    });
    
    // 暴露 applyCustomImages 到全局，供外部调用
    window.refreshCustomImages = applyCustomImages;
})();
