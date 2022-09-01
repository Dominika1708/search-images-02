import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';

const form = document.querySelector('#search-form');
const input = document.querySelector('input');
const submitBtn = document.querySelector('button');
const gallery = document.querySelector('.gallery');

const fetchPictures = async name => {
  const searchName = await name.replaceAll(' ', '+');
  const response = await fetch(
    `https://pixabay.com/api/?key=29604603-3e19714eecf15449ea09081a7&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  const pictures = await response.json();
  return pictures;
};

const addPictures = pictures => {
  let markup = ``;
  for (const photo in pictures) {
    markup =
      markup +
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
      ${photo.downloads}
    </p>
  </div>
</div>`;
  }

  gallery.innerHTML = markup;
};

new SimpleLightbox('.gallery a', { captionDelay: 250 });

console.log(fetchPictures('cat'));

form.addEventListener('submit', e => {
  e.preventDefault();
  try {
    let tipedInput = input.value.trim();
    console.log(fetchPictures(tipedInput));
    if (tipedInput === '') {
      gallery.innerHTML = '';
      return;
    }
    return fetchPictures(tipedInput).then(pictures => {
      Notiflix.Notify.failure('nooooo');
      addPictures(pictures);
    });
  } catch (error) {
    console.log(error.message);
  }
});
