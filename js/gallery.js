// Loader
window.addEventListener("load", () => {
  document.querySelector(".page-loader").style.display = "none";
});

// Cursor Glow
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Lightbox
function openLightbox(card) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = card.querySelector("img").src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Testimonials Slider
let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

setInterval(() => {
  testimonials[index].classList.remove("active");
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add("active");
}, 4000);

// AOS
AOS.init({
  duration: 1200,
  once: true
});
