// ハンバーガーメニュー自動クローズ
document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNav');
    
    if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  });
});

// ギャラリー自動スクロール（補助）
document.addEventListener('DOMContentLoaded', function() {
  const galleryInner = document.querySelector('.gallery-scroll-inner');
  
  if (galleryInner) {
    // アニメーションが始まる前に要素を複製
    const galleryItems = galleryInner.innerHTML;
    galleryInner.innerHTML = galleryItems + galleryItems;
  }
});
