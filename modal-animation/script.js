let btnView = document.getElementById('btn-view-modal');
let btnClose = document.getElementById("btn-close");
let modal = document.getElementById("modal");

function openModal() {
   modal.style.display = "block";
   modal.classList.remove('close');
   setTimeout(() => modal.classList.add('show'), 10); // Delay to trigger transition
}
function closeModal() {
   modal.classList.remove('show');
   modal.classList.add('close');
   setTimeout(() => modal.style.display = "none", 300);
}  