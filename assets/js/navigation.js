function initNavigation() {
  const currentPath = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (href === currentPath || href === './' + currentPath || href === './' + currentPath.replace('./', '')) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
});
