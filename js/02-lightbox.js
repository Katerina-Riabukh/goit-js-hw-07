import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const list = document.querySelector('.gallery');

const listMarcap = galleryItems.map(({ preview, original, description }) => {

    return ` <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image"
                    src="${preview}" 
                    alt="${description}" />
                </a>
            </li>`
   
}).join('');

list.insertAdjacentHTML("afterbegin", listMarcap);

// list.addEventListener('click', showPhotoSlider);

// function showPhotoSlider(event) {
//     event.preventDefault();

// };

 const lightbox = new SimpleLightbox('.gallery a', { animationSpeed: 150,captionsData: 'alt', captionDelay: 250,});


