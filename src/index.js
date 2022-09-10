import './pagination'
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import Notiflix from 'notiflix';

// const form = document.querySelector('#search-form');
// const input = document.querySelector('input');
// const gallery = document.querySelector('.gallery');
// const btnForMore = document.querySelector('button.load-more');
// let page = 1;

// const fetchPictures = async name => {
//   const searchName = await name.replaceAll(' ', '+');
//   const response = await fetch(
//     `https://pixabay.com/api/?key=29604603-3e19714eecf15449ea09081a7&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
//   );
//   const pictures = await response.json();
//   return pictures;
// };

// const lightbox = new SimpleLightbox('.gallery a');

// const addPictures = pictures => {
//   const photos = pictures.hits;
//   const markup = photos
//     .map(
//       photo =>
//         `<div class="photo-card">
//          <a class="gallery-link" href="${photo.largeImageURL}">
//             <img class="gallery-image" src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy"/>
//          </a>    
//             <div class="info">
//                 <p class="info-item">
//                 <b>Likes</b>
//                 ${photo.likes}
//                 </p>
//                 <p class="info-item">
//                 <b>Views</b>
//                 ${photo.views}
//                 </p>
//                 <p class="info-item">
//                 <b>Comments</b>
//                 ${photo.comments}
//                 </p>
//                 <p class="info-item">
//                 <b>Downloads</b>
//                 ${photo.downloads}
//                 </p>
//             </div>
//         </div>`
//     )
//     .join('');
//   gallery.insertAdjacentHTML('beforeend', markup);
// };

// form.addEventListener('submit', e => {
//   let tipedInput = input.value.trim();
//   e.preventDefault();
//   gallery.innerHTML = '';
//   page = 1;
//   try {
//     console.log(fetchPictures(tipedInput));
//     if (tipedInput === '') {
//       gallery.innerHTML = '';
//       btnForMore.classList.add('hidden');
//       return;
//     }
//     return fetchPictures(tipedInput).then(pictures => {
//       if (pictures.totalHits === 0) {
//         btnForMore.classList.add('hidden');
//         gallery.innerHTML = '';
//         Notiflix.Notify.failure(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//       }
//       if (pictures.totalHits > 0) {
//         Notiflix.Notify.success(
//           `Hooray! We found ${pictures.totalHits} images.`
//         );
//         page += 1;
//         addPictures(pictures);
//         lightbox.refresh();
        
//         if (page > 1 && pictures.totalHits > 40) {
//           btnForMore.classList.remove('hidden');
//         }
//       }
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// btnForMore.addEventListener('click', async e => {
//   e.preventDefault;
//   let tipedInput = input.value.trim();
//   const pictures = await fetchPictures(tipedInput);
//   if (pictures.totalHits > 40) {
//     page += 1;
//     addPictures(pictures);
//     lightbox.refresh();
//   }
//   let pages = pictures.totalHits / 40;
//   if (page > pages) {
//     btnForMore.classList.add('hidden');
//     Notiflix.Notify.info(
//       `We're sorry, but you've reached the end of search results.`
//     );
//   }
// });
