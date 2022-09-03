import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryItemsEl = document.querySelector('.gallery');

function galleryEl(galleryItems) {
  const galleryElCard = galleryItems
    .map(
      ({ preview, original, description }) =>
        `
    <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`
    )
    .join('');

  return galleryElCard;
}

galleryItemsEl.insertAdjacentHTML('beforeend', galleryEl(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});
