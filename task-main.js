import arrayCards from './gallery-items.js';

'use strict'
// Разбей задание на несколько подзадач:
//1. Создание и рендер разметки по массиву данных и предоставленному шаблону.
//2. Реализация делегирования на галерее ul.js - gallery и получение url большого изображения.
//3. Открытие модального окна по клику на элементе галереи.
// 4. Подмена значения атрибута src элемента img.lightbox__image.
// 5. Закрытие модального окна по клику на кнопку button[data - action= "close-lightbox"].
//6.  Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того,
// чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

// step -1 Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galerryEl = document.querySelector('.js-gallery');

function makeCardsMarkup(card) {
    const { preview, original, description } = card;
    return `
    <li class="gallery__item">
    <a
        class="gallery__link"
        href="${original}"
    >
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </li>`;

};

const makeRenderRows = arrayCards.map(makeCardsMarkup).join(' ');

galerryEl.insertAdjacentHTML('beforeend', makeRenderRows);


// step 2 Реализация делегирования на галерее ul.js - gallery и получение url большого изображения.
galerryEl.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    const isGalleryLinkEl = evt.target.classList.contains('gallery__image');
    if (!isGalleryLinkEl) {
        return;
    }

    let urlBigSize = evt.target.dataset.source;

    console.log(urlBigSize);
    // console.log(evt.target);
    // const galleryLinkEl = evt.target;
    // const parentContainerCard = galleryLinkEl.closest('gallery__item');

    // // функция - получение url большого изображения
    // addUrlBigSize(parentContainerCard);


}

// function addUrlBigSize(card) {
//     card.src = card.dataset.source
//     console.log(card);

// };
