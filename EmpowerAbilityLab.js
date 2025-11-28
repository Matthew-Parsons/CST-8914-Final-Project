// EmpowerAbilityLab.js
// Simple SPA: show/hide sections + move focus

document.addEventListener("DOMContentLoaded", function () {
  const sections = {
    home: document.getElementById("home"),
    services: document.getElementById("services"),
    schedule: document.getElementById("schedule"),
  };

  const links = document.querySelectorAll(".js-spa-link");
  const status = document.getElementById("spa-status");

  function showSection(id) {
    const target = sections[id] || sections.home;

    // Hide all sections except the target
    Object.keys(sections).forEach(key => {
      if (!sections[key]) return;
      sections[key].hidden = sections[key] !== target;
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

      // Announce for screen readers
      if (status) {
        status.textContent = heading.textContent + " section loaded";
      }
    }
  }

  // Hook up nav links
  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = link.dataset.target;
      if (!targetId) return;
      showSection(targetId);
    });
  });

  // Initial state: show home
  showSection("home");
});
