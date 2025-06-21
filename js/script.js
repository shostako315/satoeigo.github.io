// ハンバーガーメニューの制御 - 改善版
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const slideMenu = document.getElementById('slideMenu');
    const closeBtn = document.getElementById('closeBtn');
    const menuOverlay = document.getElementById('menuOverlay');

    // メニューを開く
    function openMenu() {
        if (hamburgerBtn) hamburgerBtn.classList.add('active');
        if (slideMenu) slideMenu.classList.add('active');
        if (menuOverlay) menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // メニューを閉じる
    function closeMenu() {
        if (hamburgerBtn) hamburgerBtn.classList.remove('active');
        if (slideMenu) slideMenu.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // イベントリスナー
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openMenu();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeMenu();
        });
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            closeMenu();
        });
    }

    // ESCキーでメニューを閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && slideMenu && slideMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMenu();
            }
        });
    });

    // メニュー項目のクリック時にメニューを閉じる
    document.querySelectorAll('.menu-items a').forEach(link => {
        link.addEventListener('click', function(e) {
            // 外部リンクの場合はメニューを閉じる
            if (!this.getAttribute('href').startsWith('#')) {
                setTimeout(() => {
                    closeMenu();
                }, 100);
            }
        });
    });
});
