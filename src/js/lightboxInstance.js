import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
export const lightbox = new SimpleLightbox('.gallery-link', {
  nav: true,
  captionDelay: 250,
  captionsData: 'alt',
  close: true,
  enableKeyboard: true,
  docClose: true,
  scrollZoom: false,
  fadeSpeed: 400,
});
