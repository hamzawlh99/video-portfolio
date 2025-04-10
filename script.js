// 3D Mouse Movement
document.addEventListener('mousemove', (e) => {
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach((item) => {
    let x = (window.innerWidth / 2 - e.pageX) / 20;
    let y = (window.innerHeight / 2 - e.pageY) / 20;
    item.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
  });
});

// Hover Effects for Project
const projectItems = document.querySelectorAll('.project-item iframe');
projectItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.boxShadow = '0 15px 45px rgba(0, 0, 0, 0.4)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
    item.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
  });
});
