// AOS
AOS.init({
  duration: 1200,
  once: true
});

// Form Submission (Demo)
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! We will contact you soon.");
  this.reset();
});
