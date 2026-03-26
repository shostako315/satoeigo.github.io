document.addEventListener('DOMContentLoaded', function() {

  // JS読み込み成功フラグ（CSSアニメーション有効化）
  document.body.classList.add('js-loaded');

  // ============================
  // ナビバーのスクロール変化
  // ============================
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll();

  // ============================
  // ハンバーガーメニュー
  // ============================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const slideMenu = document.getElementById('slideMenu');
  const closeBtn = document.getElementById('closeBtn');
  const menuOverlay = document.getElementById('menuOverlay');

  function openMenu() {
    if (hamburgerBtn) {
      hamburgerBtn.style.display = 'none';
    }
    if (slideMenu) slideMenu.classList.add('active');
    if (menuOverlay) menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (hamburgerBtn) {
      hamburgerBtn.style.display = 'flex';
    }
    if (slideMenu) slideMenu.classList.remove('active');
    if (menuOverlay) menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

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

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && slideMenu && slideMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  // ============================
  // スムーズスクロール
  // ============================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = navbar ? navbar.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
        closeMenu();
      }
    });
  });

  // メニュー項目クリック時に閉じる
  document.querySelectorAll('.menu-items a').forEach(link => {
    link.addEventListener('click', function() {
      if (!this.getAttribute('href').startsWith('#')) {
        setTimeout(() => closeMenu(), 100);
      }
    });
  });

  // ============================
  // スクロールアニメーション (Intersection Observer)
  // ============================
  const fadeElements = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(function(el) {
      observer.observe(el);
    });

    // 初期表示 + スクロール時フォールバック
    function checkFadeElements() {
      fadeElements.forEach(function(el) {
        if (!el.classList.contains('visible')) {
          var rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight + 50 && rect.bottom > 0) {
            el.classList.add('visible');
          }
        }
      });
    }
    setTimeout(checkFadeElements, 100);
    window.addEventListener('scroll', checkFadeElements);
  } else {
    fadeElements.forEach(function(el) {
      el.classList.add('visible');
    });
  }

  // ============================
  // スクロールトップボタン
  // ============================
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  function handleScrollTopVisibility() {
    if (!scrollTopBtn) return;
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleScrollTopVisibility);

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================
  // パララックス効果（ヒーロー画像）
  // ============================
  const heroImage = document.querySelector('.hero-image img');

  if (heroImage) {
    window.addEventListener('scroll', function() {
      const scrolled = window.scrollY;
      const heroHeight = document.querySelector('.hero-section');
      if (heroHeight && scrolled < heroHeight.offsetHeight) {
        heroImage.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
      }
    });
  }

});
