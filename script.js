document.addEventListener('scroll', function() {
  let sections = document.querySelectorAll('section');

  sections.forEach((section) => {
    let position = section.getBoundingClientRect();

    if (position.top <= window.innerHeight && position.bottom >= 0) {
      section.classList.add('visible');
    }
  });
});

// Mouse effect for dynamic background animation
const heroSection = document.querySelector('.hero');
heroSection.addEventListener('mousemove', (e) => {
  const { clientX: mouseX, clientY: mouseY } = e;
  heroSection.style.transform = `translate(-${mouseX / 20}px, -${mouseY / 20}px)`;
});
