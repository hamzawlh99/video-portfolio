document.addEventListener('scroll', function() {
  let sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    let position = section.getBoundingClientRect();
    if (position.top <= window.innerHeight && position.bottom >= 0) {
      section.classList.add('visible');
    }
  });
});

// Smooth scroll effect
const heroSection = document.querySelector('.hero');
heroSection.addEventListener('mousemove', (e) => {
  const { clientX: mouseX, clientY: mouseY } = e;
  heroSection.style.transform = `translate(-${mouseX / 25}px, -${mouseY / 25}px)`;
});
