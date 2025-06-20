// ハンバーガーメニューの優雅なアニメーション
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
    item.addEventListener('click', toggleMenu);
  });
  
  // スクロールアニメーション
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // 監視対象の要素
  document.querySelectorAll('.schedule-card, .highlight-card').forEach(card => {
    observer.observe(card);
  });
});
