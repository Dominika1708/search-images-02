import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('input');
const submitBtn = document.querySelector('button');
const gallery = document.querySelector('.gallery');

function fetchPictures(name) {
  return fetch(
    `https://pixabay.com/api/?key=29604603-3e19714eecf15449ea09081a7&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

const addPictures = pictures => {
  const markup = pictures
    .map(photo => {
      `<div class="photo-card">
      <a href="${photo.largeImageURL}">
  <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      ${photo.likes}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${photo.views}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${photo.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${photo.downloads }
    </p>
  </div>
</div>`;
    })
    .join('');
  gallery.innerHTML = markup;
};

new SimpleLightbox('.gallery a', { captionDelay: 250 });