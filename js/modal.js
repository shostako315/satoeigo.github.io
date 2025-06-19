function openModal(src) {
  const modal = new bootstrap.Modal(document.getElementById('imageModal'));
  const modalImg = document.querySelector('#imageModal img');
  modalImg.src = src;
  modal.show();
}
