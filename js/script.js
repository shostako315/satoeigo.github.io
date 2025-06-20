document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const slideMenu = document.getElementById('slideMenu');
  const closeBtn = document.getElementById('closeBtn');
  const menuOverlay = document.getElementById('menuOverlay');
  function openMenu() {
    hamburgerBtn.classList.add('active');
    slideMenu.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.classList.add('no-scroll');
  }
  function closeMenu() {
    hamburgerBtn.classList.remove('active');
    slideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
  hamburgerBtn.addEventListener('click', () => {
    if (!slideMenu.classList.contains('active')) {
      setTimeout(openMenu, 300);
    } else {
      closeMenu();
    }
  });
  closeBtn.addEventListener('click', closeMenu);
  menuOverlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.menu-items a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
});
function openModal(src) {
  const modal = new bootstrap.Modal(document.getElementById('imageModal'));
  const modalImg = document.getElementById('modalImg');
  modalImg.src = src;
  modal.show();
}
