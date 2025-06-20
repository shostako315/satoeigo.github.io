document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const slideMenu = document.getElementById('slideMenu');
  const closeBtn = document.getElementById('closeBtn');
  const menuOverlay = document.getElementById('menuOverlay');

  // ハンバーガーメニュー開く
  hamburgerBtn.addEventListener('click', function() {
    hamburgerBtn.classList.add('active');
    slideMenu.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // メニュー閉じる
  function closeMenu() {
    hamburgerBtn.classList.remove('active');
    slideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  closeBtn.addEventListener('click', closeMenu);
  menuOverlay.addEventListener('click', closeMenu);

  // メニューリンククリック時に閉じる
  const menuLinks = document.querySelectorAll('.menu-items a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      // 内部リンクの場合のみメニューを閉じる
      if (this.getAttribute('href').startsWith('#')) {
        closeMenu();
      }
    });
  });

  // ESCキーでメニューを閉じる
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
});
