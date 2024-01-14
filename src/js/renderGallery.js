export const renderGallery = hits => {
  return hits.reduce(
    (html, image) =>
      html +
      `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
  </a>
  <div class="descr-container">
  <div class="image-descr">Likes
  <span class="image-descr-value">${image.likes}</span>
  </div>
    <div class="image-descr">Views
  <span class="image-descr-value">${image.views}</span>
  </div>
      <div class="image-descr">Comments
  <span class="image-descr-value">${image.comments}</span>
  </div>
        <div class="image-descr">Downloads
  <span class="image-descr-value">${image.downloads}</span>
  </div>
  </div>
</li>`,
    ''
  );
};
