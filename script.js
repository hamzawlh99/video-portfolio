// Mouse Cursor Effects
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// Parallax Scrolling Effect
document.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  const parallax = document.querySelector('.hero');
  parallax.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});

// Hover Effects for Projects
const projectItems = document.querySelectorAll('.project-item iframe');
projectItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});
