import { getFact } from "./facts.js";
import { getTranslate } from "./translate.js";

export default function initImages(){

const btnNext = document.querySelector('#next');

function getImage(){
    fetch('https://cataas.com/cat')
    .then(response => response.blob())
    .then(body => {
        const blobUrl = URL.createObjectURL(body)
        const catDiv = document.querySelector('#catImage');
        catDiv.src = blobUrl
    })
}

btnNext.addEventListener('click', () =>{
    getImage(),
    getFact()
})

}