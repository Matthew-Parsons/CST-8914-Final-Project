//Template Function that can be used to run JavaScript on the page
//Note: This can be changed to whatever JavaScript formatting you would like

const inviteCb = document.getElementById("invite");
const textArea = document.getElementById("hiddenTextArea");
inviteCb.addEventListener('click', function() {
    if (inviteCb.checked) {
        textArea.style.display = "block"; // Show the text area
    } else {
        textArea.style.display = "none";  // Hide the text area
    }
});
const toggleCheckbox = document.getElementById("email_switch");
const toggleImg = document.getElementById("switch");
toggleCheckbox.addEventListener('click',toggleSwitch);
toggleCheckbox.addEventListener('keydown', function(event){
  if (event.key === " " || event.key === 'Enter'){
    event.preventDefault();
    toggleSwitch();
  }
});

function toggleSwitch(){
    const isChecked = toggleCheckbox.getAttribute('aria-checked') === 'true';
    toggleCheckbox.setAttribute('aria-checked', (!isChecked).toString());
    if (toggleCheckbox.getAttribute('aria-checked') == 'true'){                            
        toggleImg.src = "images/on.jpg";
    }else{
        toggleImg.src = "images/off.jpg"
    }
  }

const navLinks = document.querySelectorAll('.nav-link');

// Get all content sections
const contentSections = document.querySelectorAll('.page');

// Function to hide all sections
function hideAllSections() {
    contentSections.forEach(section => {
        section.style.display = 'none';
    });
}

// Function to show a specific section
function showSection(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.style.display = 'block'; // or 'flex', 'grid', etc.
    }
}

// Add click event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default anchor link behavior (page jump/reload)
        event.preventDefault();

        // Get the ID of the target section from the data-target attribute
        const targetId = this.getAttribute('data-target');

        // Hide all sections first
        hideAllSections();

        // Show the target section
        showSection(targetId);
    });
});

// Optional: Ensure the default home section is visible on page load
document.addEventListener('DOMContentLoaded', (event) => {
    hideAllSections();
    showSection('home-page');
});