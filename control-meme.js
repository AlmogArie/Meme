'use strict';

var gImgId;
var gElCanvas = document.querySelector('#my-canvas');
var gCtx = gElCanvas.getContext('2d');

function init() {
    renderGallery();
}


function renderGallery() {
    console.log('rendering gallery');

    var elPictureGaller = document.querySelector('.picture-gallery');
    var galleryHTML = '';
    getImgs().forEach(img => {
        galleryHTML += `<div data-img ='${img.id}' class='img'> <img src='${img.url}' onClick='selectPic(${img.id})'>
        </div>`
    });


    renderSearchWords(getGSortWords());
    console.log(elPictureGaller);

    return elPictureGaller.innerHTML = galleryHTML;
}

function selectPic(imgId) {
    console.log('imgId ', imgId);
    var elPictureGaller = document.querySelector('.picture-gallery');
    elPictureGaller.style.display = 'none';
    gImgId = imgId;
    createCanavas(gImgId);
}

function createCanavas(imgId) {

    var elCanvasContainer = document.querySelector('.canavas-container');
    var img = new Image();
    img.src = getImg(imgId).url;

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.clientWidth, gElCanvas.height)
    }

    elCanvasContainer.style.display = 'block';
}

function renderSearchWords(sortWords) {

    var elSearch = document.querySelector('.search-words');
    var strHTML = '';
    sortWords.forEach(word => {
        strHTML += `<span data-word='${word}'> ${word}  </span>`

    })
    return elSearch.innerHTML += strHTML;
    // console.log(elSearch);
}