'use strict';

import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const overlay = document.querySelector('.overlay');
const btnClose = overlay.querySelector('button[data-action="close-modal"]');

const createListItem = function createListItem({
  preview,
  original,
  description,
}) {
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

  const btn = `<span class="gallery__icon">
  <i class="material-icons">zoom_out_map</i>
  </span>`;

  link.appendChild(img);
  link.insertAdjacentHTML('beforeend', btn);
  li.appendChild(link);
  return li;
};

const createList = function createList(listOfImg) {
  listOfImg.forEach((element) => {
    const li = createListItem(element);
    gallery.appendChild(li);
  });
};

createList(galleryItems);

gallery.addEventListener('click', onImgClickHandle);

function onImgClickHandle(event) {
  if (event.target == event.currentTarget) return;

  event.preventDefault();

  const listItemImg = event.target;
  const targetImgSrc = listItemImg.dataset.source;
  const targetImgAlt = listItemImg.alt;

  showImg(targetImgSrc, targetImgAlt);

  btnClose.addEventListener('click', onClickCloseIconHandle);
  window.addEventListener('keydown', onEscKeyDownHandle);
}

function showImg(targetImgSrc, targetImgAlt) {
  const imgContainer = overlay.querySelector('.content');
  let img = imgContainer.querySelector('img');
  // if we change only source in img tag we have few milliseconds
  //    when we see old img before new loaded.
  if (imgContainer.contains(img)) {
    imgContainer.removeChild(img);
  }
  img = `<img src="${targetImgSrc}" alt="${targetImgAlt}" />`;
  imgContainer.insertAdjacentHTML('beforeend', img);
  overlay.classList.add('is-visible');
}

function onClickCloseIconHandle(event) {
  event.preventDefault();
  closeOverlay();
}

function onEscKeyDownHandle(event) {
  if (event.code == 'Escape') {
    closeOverlay();
  }
  console.log(event.code);
}

function closeOverlay() {
  overlay.classList.remove('is-visible');
  btnClose.removeEventListener('click', onClickCloseIconHandle);
  overlay.removeEventListener('keydown', onClickCloseIconHandle);
}
