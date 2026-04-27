//////////////////////////////
// MOBILE MENU
//////////////////////////////

const menuBtn = document.getElementById("menuBtn");
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

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

links.forEach(link => {
  link.addEventListener("click", closeMenu);
});


//////////////////////////////
// FORM SUBMIT + GOOGLE SHEETS
//////////////////////////////

const form = document.getElementById("leadForm");
const popup = document.getElementById("successPopup");
const submitBtn = document.getElementById("submitBtn");
const spinner = document.getElementById("spinner");
const btnText = document.getElementById("btnText");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // loading state
  submitBtn.disabled = true;
  spinner.classList.remove("hidden");
  btnText.textContent = "Submitting...";

  const data = {
    name: form.querySelector('input[placeholder="Your Name"]').value,
    email: form.querySelector('input[type="email"]').value,
    business: form.querySelector('input[placeholder="Business Name"]').value,
    message: form.querySelector('textarea').value
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbwTHVq-35DhK4GOz8Aq6dBqAciGocpWOpQGe0xcmUvf7mQ9wTJhnrUp2OVovi-a-uQYTQ/exec", {
      method: "POST",
      body: new URLSearchParams(data),
      mode: "no-cors"
    });

    popup.classList.remove("hidden");
    form.reset();

    setTimeout(() => {
      popup.classList.add("hidden");
    }, 3000);

  } catch (error) {
    alert("Something went wrong!");
    console.error(error);
  }

  // reset button
  submitBtn.disabled = false;
  spinner.classList.add("hidden");
  btnText.textContent = "Get Started Now";
});