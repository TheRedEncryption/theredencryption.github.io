var modal, modalTitle, modalBody, closeBtn;

function modalMain() {
    modal = document.getElementById('myModal');
    modalTitle = document.getElementById('modal-title');
    modalBody = document.getElementById('modal-body');
    closeBtn = document.querySelector('.modal .close');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // click outside to close
    window.addEventListener('click', function (event) {
        if (event.target === modal) closeModal();
    });

    // ESC to close
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeModal();
    });
}

function openModal() {
    if (!modal) return;
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden','false');
}

function closeModal() {
    if (!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden','true');
}

// Public helper used by project cards
window.openProjectModal = function (details) {
    if (!modalTitle || !modalBody) return;
    var title = details.title || (details.dataset && details.dataset.title) || '';
    var description = details.description || (details.dataset && details.dataset.description) || '';

    modalTitle.textContent = title;
    modalBody.innerHTML = description;
    openModal();
};

document.addEventListener('DOMContentLoaded', modalMain);