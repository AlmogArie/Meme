'use strict';

var gImgs = [{
    id: 0,
    url: './meme-imgs(square)/1.jpg',
    keyWord: 'trump',
}, {
    id: 1,
    url: './meme-imgs(square)/2.jpg',
    keyWord: 'dogs',
}]

var gSortWords = ['funny', 'sad', 'happy', 'stupid', 'love']


// var gKeyWords

// var gMeme = {
//     selectedImgId: id,
//     selectedLineIdx: lineIdx,
//     line: [{
//         text: txt,
//         size: size,
//         align: align,
//         color: color,
//     }]
// }

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