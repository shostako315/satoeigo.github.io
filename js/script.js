document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const slideMenu = document.getElementById('slideMenu');
  const closeBtn = document.getElementById('closeBtn');
  let menuOverlay = document.getElementById('menuOverlay');
  if (!menuOverlay) {
    menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    menuOverlay.id = 'menuOverlay';
    document.body.appendChild(menuOverlay);
  }
  function toggleMenu() {
    hamburgerBtn.classList.toggle('active');
    slideMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  }
  hamburgerBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);
  menuOverlay.addEventListener('click', toggleMenu);
  document.querySelectorAll('.menu-items a').forEach(item => {
    item.addEventListener('click', function(e) {
      if (!this.classList.contains('english-link')) {
        toggleMenu();
      }
    });
  });
});
