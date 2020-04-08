'use strict';

var gImgId;

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
    return elPictureGaller.innerHTML = galleryHTML;
}

function selectPic(imgId) {
    console.log('imgId ', imgId);
    var elPictureGaller = document.querySelector('.picture-gallery');
    elPictureGaller.style.display = 'none';
    
    return gImgId = imgId;
}

function createCanavas(gImgId){

}

function renderSearchWords(sortWords) {
    console.log('render search');

    var elSearch = document.querySelector('.search-words');
    var strHTML = '';
    sortWords.forEach(word => {
        strHTML += `<span data-word='${word}'> ${word}  </span>`

    })
    return elSearch.innerHTML += strHTML;
    // console.log(elSearch);

}