document.addEventListener('scroll', function() {
  let sections = document.querySelectorAll('section');

  sections.forEach((section) => {
    let position = section.getBoundingClientRect();

    if (position.top <= window.innerHeight && position.bottom >= 0) {
      section.classList.add('visible');
    }
  });
});
