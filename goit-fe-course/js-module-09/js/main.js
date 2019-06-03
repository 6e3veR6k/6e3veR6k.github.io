/* jshint esversion: 9 */
/* jshint strict: global */
/* jshint devel: true */
'use strict';

import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');

const createListItem = function createListItem({ preview, original, description }) {
    const li = document.createElement('li');
    li.classList.add('gallery-list_item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = original;

    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = preview;
    img.alt = description;
    img.setAttribute('data-source', original);


    const btn = `<span class="gallery__icon"><i class="material-icons">zoom_out_map</i></span>`;

    link.appendChild(img);
    link.insertAdjacentHTML('beforeend', btn);
    li.appendChild(link);
    return li;
};

const createList = function createList(listOfImg) {
    listOfImg.forEach(element => {
        const li = createListItem(element)
        gallery.appendChild(li);
    });
}


createList(galleryItems);