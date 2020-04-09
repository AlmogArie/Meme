'use strict';

var gImgId;
var gElCanvas;
var gCtx;

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
    //mybe a function to update gMeme
    gMeme.iselectedImgId = imgId;
    var elPictureGaller = document.querySelector('.picture-gallery');
    elPictureGaller.style.display = 'none';

    // (-1) to ajust the index with pictures
    gImgId = imgId - 1;
    console.log(gImgId);

    renderCanvasInput(gImgId)
}

function createCanavasImg(imgId) {
    var img = new Image();
    img.src = getImg(imgId).url;

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.clientWidth, gElCanvas.height)
    }
//update the service gMeme
let updateMeme = getGMeme();
updateMeme.selectedImgId = imgId

}

function renderSearchWords(sortWords) {
    
    var elSearch = document.querySelector('.search-words');
    var strHTML = '';
    sortWords.forEach(word => {
        strHTML += `<span data-word='${word}'> ${word}  </span>`
        
    })
    return elSearch.innerHTML += strHTML;
}


function renderCanvasInput(imgId) {
    var elCanvasContainer = document.querySelector('.canavas-container');
    elCanvasContainer.style.display = 'block'
    elCanvasContainer.innerHTML = `
    <canvas id="my-canvas" height="300" width="300"></canvas>
    <section class="input">
    <input type="text" placeholder="Top Line" class="top-line"> <button onClick='updateGMeme()'> OK </button>
    <button class="inlarge-text">+</button>
    <button class="shrink-text">-</button>
    <input type="color" name="text-color" id="">
    <input type="text" placeholder="Bottom Line" class="bot-line">
    </section>
    `;
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d');
    createCanavasImg(imgId)
    
}

function updateGMeme(){
    let txtLineTop = document.querySelector('.top-line').value;
    //update the service gMeme
    let updateMeme = getGMeme();
    updateMeme.line.text = txtLineTop;
    
}