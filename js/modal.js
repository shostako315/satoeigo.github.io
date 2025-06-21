// ポスターギャラリーのモーダル機能
let currentModal = null;

function openModal(imageSrc) {
    // 既存のモーダルを削除
    if (currentModal) {
        document.body.removeChild(currentModal);
    }

    // モーダル要素を作成
    const modal = document.createElement('div');
    modal.className = 'poster-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal()">&times;</button>
                <img src="${imageSrc}" alt="ポスター" class="modal-image">
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    currentModal = modal;

    // アニメーション
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeModal() {
    if (currentModal) {
        currentModal.classList.remove('active');
        setTimeout(() => {
            if (currentModal && document.body.contains(currentModal)) {
                document.body.removeChild(currentModal);
            }
            document.body.style.overflow = '';
            currentModal = null;
        }, 300);
    }
}

// ESCキーでモーダルを閉じる
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && currentModal) {
        closeModal();
    }
});
