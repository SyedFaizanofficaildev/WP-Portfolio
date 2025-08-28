// ===== Mobile Menu Toggle =====
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

// ===== Scroll Reveal Animation =====
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
});

// ===== Skill Bar Animation =====
window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress").forEach((bar) => {
    const pos = bar.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100 && bar.style.width === "") {
      if (bar.classList.contains("wp")) bar.style.width = "95%";
      if (bar.classList.contains("mern")) bar.style.width = "90%";
      if (bar.classList.contains("html")) bar.style.width = "95%";
      if (bar.classList.contains("css")) bar.style.width = "90%";
      if (bar.classList.contains("js")) bar.style.width = "85%";
    }
  });
});

// ===== Contact Form Alert (optional) =====
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for contacting me! I’ll reply soon.");
  });
}
