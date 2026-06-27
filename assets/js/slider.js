function initSlider() {
  const heroImages = document.querySelectorAll('.hero-img');
  heroImages.forEach(img => {
    img.loading = 'lazy';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
});
