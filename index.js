document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (!hamburger || !navMenu) {
    console.error('Hamburger button or nav menu not found');
    return;
  }

  hamburger.addEventListener('click', function () {
    console.log('Hamburger clicked');
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking a nav link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      console.log('Nav link clicked');
      hamburger.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      console.log('Clicked outside menu');
      hamburger.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
    }
  });
});
