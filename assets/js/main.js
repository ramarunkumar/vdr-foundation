document.addEventListener('DOMContentLoaded', () => {
  if (typeof initNavigation === 'function') {
    initNavigation();
  }
  if (typeof initSlider === 'function') {
    initSlider();
  }
  if (typeof initGalleryLightbox === 'function') {
    initGalleryLightbox();
  }
});
