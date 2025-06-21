// ハンバーガーメニューの制御 - 改善版
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const slideMenu = document.getElementById('slideMenu');
    const closeBtn = document.getElementById('closeBtn');
    const menuOverlay = document.getElementById('menuOverlay');

    // メニューを開く
    function openMenu() {
        hamburgerBtn.classList.add('active');
        slideMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // メニューを閉じる
    function closeMenu() {
        hamburgerBtn.classList.remove('active');
        slideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // イベントリスナー
    if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

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
                closeMenu();
            }
        });
    });
});
