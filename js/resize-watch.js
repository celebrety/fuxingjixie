(function () {
    var prevMobile = window.__isMobile;
    var timer;
    window.addEventListener('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            var ua     = navigator.userAgent || '';
            var nowMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|Mobile|Symbian|Opera Mini/i.test(ua)
                            || window.innerWidth <= 768;
            if (nowMobile !== prevMobile) {
                location.reload();
            }
        }, 400);
    });
})();
