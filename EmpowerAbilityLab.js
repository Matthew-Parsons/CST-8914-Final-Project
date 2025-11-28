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

function toggleSwitch(){
    var toggleCheckbox = document.getElementById("email_switch");
    var toggleImg = document.getElementById("switch");
    var isChecked = toggleCheckbox.getAttribute('aria-checked');

  if (isChecked === 'true') {
    toggleCheckbox.setAttribute('aria-checked', 'false');
    toggleImg.src = "images/off.jpg"
  } else {
    toggleCheckbox.setAttribute('aria-checked', 'true');
    toggleImg.src = "images/on.jpg";
  }
}
function toggleSwitchKey(event){
    var toggleCheckbox = document.getElementById("email_switch");
    var toggleImg = document.getElementById("switch");

    if (event.key === " " || event.key === 'Enter') {
      // Prevent the default action (if any)
      event.preventDefault();
      // Manually toggle the checked state of the associated checkbox
      toggleCheckbox.checked = !toggleCheckbox.checked;
    if (toggleCheckbox.checked){                            
        toggleImg.src = "images/on.jpg";
    }else{
        toggleImg.src = "images/off.jpg"
    }
    }
    

}