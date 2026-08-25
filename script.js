const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuToggle.textContent = nav.classList.contains("open") ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.textContent = "☰";
    });
  });
}

/* Contact form demo */
const form = document.querySelector("#contactForm");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = document.querySelector("#formMessage");

    message.textContent =
      "ขอบคุณมาก! Blooie ได้รับข้อความของคุณแล้ว 🌼";

    form.reset();
  });
}

/* Small reveal animation */
const revealItems = document.querySelectorAll(
  ".service-item, .gallery-item, .process-row, .feature-content"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(25px)";
  item.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(item);
});
