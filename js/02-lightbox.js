import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const ulListEl = document.querySelector('.gallery');

const listItemImgMarkup = galleryItems.map(image =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>
    </li>`
).join('');

ulListEl.innerHTML = listItemImgMarkup;

// ulListEl.addEventListener('click', onImgClick);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

