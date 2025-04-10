// Custom Cursor Animation
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// Hover Effects for Projects
const projectItems = document.querySelectorAll('.project-item iframe');
projectItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.boxShadow = '0 15px 45px rgba(0, 0, 0, 0.4)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
    item.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
  });
});
