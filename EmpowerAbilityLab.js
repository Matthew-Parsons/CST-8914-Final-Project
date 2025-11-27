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

