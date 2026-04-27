
// Mobile toggle
  const btn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  const links = menu.querySelectorAll("a");

  function openMenu() {
    menu.classList.remove("-translate-y-full");
    overlay.classList.remove("hidden");
  }

  function closeMenu() {
    menu.classList.add("-translate-y-full");
    overlay.classList.add("hidden");
  }

  btn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  // auto close on link click
  links.forEach(link => {
    link.addEventListener("click", closeMenu);
  });


