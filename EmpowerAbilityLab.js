// EmpowerAbilityLab.js
// SPA: show/hide sections + move focus + back button support

document.addEventListener("DOMContentLoaded", function () {
  const sections = {
    home: document.getElementById("home"),
    services: document.getElementById("services"),
    schedule: document.getElementById("schedule"),
  };

  const links = document.querySelectorAll(".js-spa-link");
  const status = document.getElementById("spa-status"); 
  const DEFAULT_VIEW_ID = "home";


  function showSection(id) {
    const target = sections[id] || sections[DEFAULT_VIEW_ID];

    
  // switches the page title 
  if (id === "home") {
  document.title = "Home Page";
} 
else if (id === "services") {
  document.title = "Our Services";
} 
else if (id === "schedule") {
  document.title = "Contact Us Page";
}



    if (!target) return;

    // Hide all sections except the current
    Object.keys(sections).forEach(key => {
      const section = sections[key];
      if (!section) return;
      section.hidden = section !== target;
    });

    // Update aria-current on nav links
    links.forEach(link => {
      const isCurrent = link.dataset.target === id;
      if (isCurrent) {
        link.setAttribute("aria-current", "page");
        link.classList.add("active");
        
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });

    // Move focus to the main heading in the target section
    const heading = target.querySelector("h1, h2, [role='heading']");
    if (heading) {
      const hadTabindex = heading.hasAttribute("tabindex");
      if (!hadTabindex) {
        heading.setAttribute("tabindex", "-1");
      }

      heading.focus();

      heading.addEventListener(
        "blur",
        function () {
          if (!hadTabindex) {
            heading.removeAttribute("tabindex");
          }
        },
        { once: true }
      );

      //  screen reader announcement
      if (status) {
        status.textContent = heading.textContent + " section loaded";
      }
    }
  }

  // Handle hash changes (Back/Forward buttons)
  function handleHashChange() {
    const hash = window.location.hash.replace("#", "");
    const targetId = hash || DEFAULT_VIEW_ID;
    showSection(targetId);
  }

  // Hook up nav links
  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = link.dataset.target;
      if (!targetId) return;

      // Change the hash , creates a history entry
      const newHash = "#" + targetId;
      if (window.location.hash !== newHash) {
        window.location.hash = newHash; 
      } else {
        
        showSection(targetId);
      }
    });
  });

  
  window.addEventListener("hashchange", handleHashChange);

  
  handleHashChange();
});

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

    const modalDiv = document.getElementById("modal");
    const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    const focusableElements = modalDiv.querySelectorAll(focusableElementsString);
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    let previouslyFocusedElement = document.activeElement;
    firstFocusableElement.focus();

      modalDiv.addEventListener('keydown', function(e) {
        const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
            }
        } else { // Tab
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
            }
        }
    });
    previouslyFocusedElement.focus();

  document.getElementById('schedForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('errorMsg');
  const tyMsg = document.getElementById('tyMsg');

  // Basic validation using the browser's built-in checkValidity() method
  if (!emailInput.checkValidity()) {
    errorMessage.style.display = 'block'; // Show error message
    return; // Stop further execution
  }

  // More advanced validation using a regular expression (optional)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    errorMessage.style.display = 'block';
    return;
  }
  errorMessage.style.display = 'none';
  tyMsg.style.display = 'block';
});

const burgerNav = document.getElementById("burgerNav");
const navBar = document.getElementById("navbarNav");
burgerNav.addEventListener("click", function(){
  navBar.classList.toggle("collapse");
})