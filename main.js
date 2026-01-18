/* ===============================
   TEXT REVEAL ANIMATION
================================ */
document.querySelectorAll(".reveal-text").forEach(text => {
  const letters = text.innerText.split("");
  text.innerHTML = "";
  letters.forEach((letter, i) => {
    const span = document.createElement("span");
    span.innerText = letter;
    span.style.opacity = 0;
    span.style.display = "inline-block";
    span.style.transform = "translateY(20px)";
    span.style.transition = `0.5s ease ${i * 0.05}s`;
    text.appendChild(span);

    setTimeout(() => {
      span.style.opacity = 1;
      span.style.transform = "translateY(0)";
    }, 100);
  });
});

/* ===============================
   BUTTON GLOW FOLLOW MOUSE
================================ */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.boxShadow = `${x / 8}px ${y / 8}px 25px rgba(212,175,55,0.7)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "0 0 0 transparent";
  });
});

/* ===============================
   3D CARD TILT EFFECT
================================ */
document.querySelectorAll(".mvv-card, .card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

/* ===============================
   ACTIVE NAV LINK ON SCROLL
================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("class");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* ===============================
   PARALLAX HERO EFFECT
================================ */
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (hero) {
    hero.style.backgroundPositionY = scrollY * 0.3 + "px";
  }
});

/* ===============================
   SMOOTH PAGE FADE-IN
================================ */
window.addEventListener("load", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1s ease";
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);
});
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}
