document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const slideMenu = document.getElementById('slideMenu');
  const closeBtn = document.getElementById('closeBtn');
  const menuOverlay = document.getElementById('menuOverlay');
  
  // メニュー開閉関数
  function toggleMenu() {
    hamburgerBtn.classList.toggle('active');
    slideMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  }
  
  // イベントリスナー
  hamburgerBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);
  menuOverlay.addEventListener('click', toggleMenu);
  
  // メニューアイテムクリックで閉じる
  document.querySelectorAll('.menu-items a').forEach(item => {
    item.addEventListener('click', function(e) {
      // 外部リンクでない場合のみ閉じる
      if (!this.classList.contains('english-link')) {
        toggleMenu();
      }
    });
  });
});
