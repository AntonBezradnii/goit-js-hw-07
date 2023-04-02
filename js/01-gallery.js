import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const ulListEl = document.querySelector('.gallery');

const listItemImgMarkup = galleryItems.map(image =>
    `<li class="gallery__item">
        <a href="${image.original}" class="gallery__link">
            <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
            />
        </a>
    </li>`
).join('');

ulListEl.innerHTML = listItemImgMarkup;

ulListEl.addEventListener('click', onImgClick);


function onImgClick(event) {
    event.preventDefault();

    const clickOnImg = event.target.classList.contains('gallery__image');

    if (!clickOnImg) {
        return
    } 
        const instance = basicLightbox.create(`
    <img
        src="${event.target.dataset.source}"
        alt="${event.target.alt}"
    />`
    );
    instance.show();
    
};