//Template Function that can be used to run JavaScript on the page
//Note: This can be changed to whatever JavaScript formatting you would like


function showHideForm() {
    var checkbox = document.getElementById("invite");
    var textArea = document.getElementById("hiddenTextArea");

    if (checkbox.checked) {
        textArea.style.display = "block"; // Show the text area
    } else {
        textArea.style.display = "none";  // Hide the text area
    }
}

function showCloseModal(){
    const openModal = document.querySelector("[data-open-modal]");
    const closeModal = document.querySelector("[data-close-modal]");
    const modal = document.querySelector("[data-modal]");

    openModal.addEventListener("click", () => {
        modal.showModal()
    })
    closeModal.addEventListener("click", () => {
        modal.closest()
    })
}