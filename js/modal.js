var modal = document.querySelector('.modal-bg');
var modalContent = document.querySelector('.modal-content');
var modalImg = document.querySelector('.modal-img');

function openModal(imgName) {
    console.log(imgName);
    modalImg.setAttribute('src',`assets/img-projects/${imgName}`);
    modal.classList.add('active');
    modalContent.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    modalContent.classList.remove('active');
}
