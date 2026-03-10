// Set dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple lightbox for gallery
const lb = document.querySelector('.lightbox');
const lbImg = document.querySelector('.lightbox-image');
const lbCap = document.querySelector('.lightbox-caption');
const lbClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = img.dataset.caption || '';
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox() {
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  lbImg.src = '';
  lbImg.alt = '';
  lbCap.textContent = '';
}

lb.addEventListener('click', (e) => {
  if (e.target === lb || e.target === lbClose) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lb.classList.contains('open')) closeLightbox();
});
