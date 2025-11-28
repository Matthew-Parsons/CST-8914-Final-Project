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
      } else {
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


