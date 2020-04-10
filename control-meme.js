'use strict';

var gImgId;
var gElCanvas;
var gCtx;
var gImg;

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
    getGMeme().selectedImgId = imgId;
    var elPictureGaller = document.querySelector('.picture-gallery');
    elPictureGaller.style.display = 'none';

    // (-1) to ajust the index with pictures
    gImgId = imgId - 1;

    renderCanvasInput(gImgId)
}

function createCanavasImg(imgId) {
    gImg = new Image();
    gImg.src = getImg(imgId).url;

    gImg.onload = () => {
        gCtx.drawImage(gImg, 0, 0, gElCanvas.clientWidth, gElCanvas.height)
    }
    //update the service gMeme
    let updateMeme = getGMeme();
    updateMeme.selectedImgId = imgId;

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
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d');
    createCanavasImg(imgId)

}

function updateGMeme() {
    console.log('key up');
    updateTopLine();
    updateBotLine();
    updateTxtColor()
    console.log(gMeme);


    renderMeme();
}


function renderMeme() {
    console.log(gImg);
    
    // createCanavasImg(getGMeme().selectedImgId);
    gCtx.drawImage(gImg, 0, 0, gElCanvas.clientWidth, gElCanvas.height)
    
    let memeTxt = getGMeme().line;
    writeTxtCanvasTop(memeTxt.topTxt, memeTxt.botTxt, memeTxt.color, memeTxt.align)
    console.log('render meme');
}
















//FIX TXT BOT
function writeTxtCanvasTop(txtTop, txtBot, color, align) {
    gCtx.textAlign = align;
    gCtx.fillStyle = color;
    gCtx.font = "30px Arial";
    gCtx.fillText(txtTop, 10, 50);
}

// TODO: refresh txt top
function updateTopLine() {
    let txtLineTop = document.querySelector('.top-line').value;
    let updateMemeLine = getGMeme().line;
    updateMemeLine.topTxt = txtLineTop;
    writeTxtCanvasTop(updateMemeLine.topTxt, updateMemeLine.botTxt, updateMemeLine.color, updateMemeLine.align)

}

// TODO: refresh txt bot
function updateBotLine() {
    let updateMemeLine = getGMeme().line;
    let txtLineBot = document.querySelector('.bot-line').value;
    updateMemeLine.botTxt = txtLineBot;
    writeTxtCanvasTop(updateMemeLine.topTxt, updateMemeLine.botTxt, updateMemeLine.color, updateMemeLine.align)

}
// TODO: refresh txt color
function updateTxtColor() {
    let updateMemeLine = getGMeme().line;
    let txtColor = document.querySelector('.text-color').value;
    updateMemeLine.color = txtColor;
    writeTxtCanvasTop(updateMemeLine.topTxt, updateMemeLine.botTxt, updateMemeLine.color, updateMemeLine.align)
}

// TODO: refresh txt align