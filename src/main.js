import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { formEl, galleryContainer, loadMoreBtn } from './js/refs';
import { lightbox } from './js/lightboxInstance';
import { showLoader, hideLoader } from './js/loader';
import { onScroll } from './js/onScroll';
import { renderGallery } from './js/renderGallery';

let q = null;
let page = 1;
const per_page = 40;

const getPhotos = (q, page, per_page) => {
  axios.defaults.baseURL = 'https://pixabay.com/api';

  return axios.get('/?key=41675513-91cb25c2d4155284de80d9ebe', {
    params: {
      q,
      page,
      per_page,
      orientation: 'horizontal',
    },
  });
};

const searchSubmit = async event => {
  event.preventDefault();
  loadMoreBtn.classList.add('is-hidden');
  galleryContainer.innerHTML = '';
  showLoader();
  page = 1;
  q = event.target.elements.search.value.trim();
  //
  if (!q) {
    hideLoader();
    loadMoreBtn.classList.add('is-hidden');
    return iziToast.warning({
      position: 'topRight',
      message: 'Empty query',
    });
  }
  //
  try {
    const {
      data: { hits, totalHits },
    } = await getPhotos(q, page, per_page);

    if (hits.length === 0) {
      galleryContainer.innerHTML = '';
      loadMoreBtn.classList.add('is-hidden');
      return iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
    iziToast.success({
      position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      message: `"Hooray! We found ${totalHits} images. It should be ${Math.ceil(
        totalHits / per_page
      )} pages"`,
    });

    galleryContainer.innerHTML = renderGallery(hits);
    lightbox.refresh();

    hasMoreData(Math.ceil(totalHits / per_page), page);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
};
//
const hasMoreData = (lastPage, page) => {
  if (page < lastPage) {
    loadMoreBtn.classList.remove('is-hidden');
  } else {
    loadMoreBtn.classList.add('is-hidden');
    iziToast.info({
      position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      message: "We're sorry, but you've reached the end of search results.",
    });
  }
};
//
const loadMoreData = async () => {
  page += 1;
  loadMoreBtn.classList.add('is-hidden');
  showLoader();

  try {
    const {
      data: { hits, totalHits },
    } = await getPhotos(q, page, per_page);

    galleryContainer.insertAdjacentHTML('beforeend', renderGallery(hits));
    lightbox.refresh();
    // Функція для скролу
    onScroll();

    hasMoreData(Math.ceil(totalHits / per_page), page);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
};
//
formEl.addEventListener('submit', searchSubmit);
loadMoreBtn.addEventListener('click', loadMoreData);
