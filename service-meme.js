'use strict';

var gImgs = [{
    id: 1,
    url: './meme-imgs(square)/1.jpg',
    keyWord: 'trump',
}, {
    id: 2,
    url: './meme-imgs(square)/2.jpg',
    keyWord: 'dogs',
}];



var gSortWords = ['funny', 'sad', 'happy', 'stupid', 'love']


// var gKeyWords

var gMeme = {
    selectedImgId: "",
    selectedLineIdx:"" ,
    line: {
        topTxt: '',
        botTxt:'',
        size: '',
        align: '',
        color: '',
    },
}

function getImgs() {
    return gImgs;
}

function getImg(id) {
    // console.log(gImgs[id]);
    
    return gImgs[id]
}

function getGSortWords(){
    return gSortWords;
}

function getGMeme(){
    return gMeme;
}