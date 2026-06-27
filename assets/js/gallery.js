const gallerySectionsData = [
  {
    title: 'Community Gallery',
    description: 'Moments from our outreach programs, volunteers, and community activities.',
    images: [
      { src: 'assets/images/gallery/gallery1.png', alt: 'Community outreach event', caption: 'Community outreach' },
      { src: 'assets/images/gallery/gallery2.png', alt: 'Volunteers supporting the community', caption: 'Volunteer support' },
      { src: 'assets/images/gallery/gallery3.png', alt: 'Public awareness event', caption: 'Awareness event' },
      { src: 'assets/images/gallery/gallery4.png', alt: 'Students and supporters together', caption: 'Students and supporters' },
      { src: 'assets/images/gallery/gallery5.png', alt: 'School support activity', caption: 'School support' },
      { src: 'assets/images/gallery/gallery6.png', alt: 'Community interaction session', caption: 'Community interaction' },
      { src: 'assets/images/gallery/gallery7.png', alt: 'Social initiative in action', caption: 'Social initiative' },
      { src: 'assets/images/gallery/gallery8.png', alt: 'Team meeting with local partners', caption: 'Local partnerships' },
      { src: 'assets/images/gallery/gallery9.png', alt: 'Community celebration', caption: 'Community celebration' },
      { src: 'assets/images/gallery/gallery10.png', alt: 'Educational support activity', caption: 'Educational support' },
      { src: 'assets/images/gallery/gallery11.png', alt: 'Outreach and assistance moment', caption: 'Outreach moment' },
      { src: 'assets/images/gallery/gallery12.png', alt: 'Gathering of volunteers', caption: 'Volunteer gathering' },
      { src: 'assets/images/gallery/gallery13.png', alt: 'Community service in progress', caption: 'Service in progress' },
      { src: 'assets/images/gallery/gallery14.png', alt: 'Field visit and support', caption: 'Field visit' },
      { src: 'assets/images/gallery/gallery15.png', alt: 'Community event highlight', caption: 'Event highlight' }
    ]
  },
  {
    title: 'Bag Donation Program',
    description: 'A closer look at the school bag distribution drive and student support efforts.',
    images: [
      { src: 'assets/images/activities/bag-donation/about-initiative-01.png', alt: 'Bag donation announcement', caption: 'Event announcement' },
      { src: 'assets/images/activities/bag-donation/about-initiative-02.png', alt: 'Organizers and students', caption: 'Organizers and students' },
      { src: 'assets/images/activities/bag-donation/bag-distribution-ceremony-01.png', alt: 'Bag distribution ceremony', caption: 'Ceremony highlights' },
      { src: 'assets/images/activities/bag-donation/bag-distribution-ceremony-02.png', alt: 'Students with donated bags', caption: 'Students with bags' },
      { src: 'assets/images/activities/bag-donation/bag-distribution-ceremony-03.png', alt: 'Volunteers assisting distribution', caption: 'Volunteer support' },
      { src: 'assets/images/activities/bag-donation/distribution-event-03.png', alt: 'Gift bags ready', caption: 'Gift bags ready' },
      { src: 'assets/images/activities/bag-donation/distribution-event-04.png', alt: 'Student queue for distribution', caption: 'Student queue' },
      { src: 'assets/images/activities/bag-donation/distribution-event-05.png', alt: 'Bag handover moment', caption: 'Bag handover' },
      { src: 'assets/images/activities/bag-donation/distribution-event-06.png', alt: 'Backpacks ready for students', caption: 'Backpacks ready' },
      { src: 'assets/images/activities/bag-donation/distribution-event-07.png', alt: 'Donation moment', caption: 'Donation moment' },
      { src: 'assets/images/activities/bag-donation/distribution-event-08.png', alt: 'Family and volunteers', caption: 'Family and volunteers' },
      { src: 'assets/images/activities/bag-donation/distribution-event-09.png', alt: 'School staff support', caption: 'Staff support' },
      { src: 'assets/images/activities/bag-donation/volunteers-distributing-bags-01.png', alt: 'Volunteers distributing bags', caption: 'Distributing bags' },
      { src: 'assets/images/activities/bag-donation/volunteers-group-photo.png', alt: 'Volunteer group photo', caption: 'Volunteer group' },
      { src: 'assets/images/activities/bag-donation/students-receiving-bags.png', alt: 'Students receiving bags', caption: 'Receiving bags' }
    ]
  }
];

function renderGallerySections() {
  const container = document.getElementById('gallerySections');
  if (!container) return;

  container.innerHTML = gallerySectionsData.map(section => `
    <div class="gallery-section-card">
      <div class="gallery-section-header">
        <div>
          <h3 class="gallery-section-title">${section.title}</h3>
          <p class="gallery-section-desc">${section.description}</p>
        </div>
        <span class="gallery-section-count">${section.images.length} photos</span>
      </div>
      <div class="gallery-grid">
        ${section.images.map(image => `
          <a href="${image.src}" class="gallery-item" data-lightbox="${image.src}" data-caption="${image.caption}">
            <img src="${image.src}" alt="${image.alt}" loading="lazy" />
            <div class="gallery-caption">${image.caption}</div>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function initGalleryLightbox() {
  if (document.body.dataset.galleryLightboxInitialized === 'true') return;
  document.body.dataset.galleryLightboxInitialized = 'true';

  const lightbox = document.querySelector('.image-lightbox');
  if (!lightbox) return;

  const lightboxImage = lightbox.querySelector('.lightbox-content');
  const closeButton = lightbox.querySelector('.lightbox-close');
  const captionElement = lightbox.querySelector('#lightboxCaption');

  function openLightbox(src, caption) {
    lightboxImage.src = src;
    if (captionElement) {
      captionElement.textContent = caption;
    }
    lightbox.classList.add('active');
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImage.src = '';
  }

  document.addEventListener('click', event => {
    const thumbnail = event.target.closest('[data-lightbox]');
    if (thumbnail) {
      event.preventDefault();
      const src = thumbnail.dataset.lightbox;
      const caption = thumbnail.dataset.caption || thumbnail.querySelector('img')?.alt || '';
      openLightbox(src, caption);
    }
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderGallerySections();
  initGalleryLightbox();
});
