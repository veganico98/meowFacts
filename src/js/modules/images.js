import { getFact } from "./facts.js";
import { getTranslate } from "./translate.js";

export default function initImages(){

const btnNext = document.querySelector('#next');

function getImage(){
    const catImage = document.querySelector('#catImage');

    catImage.classList.add("loading");

    fetch('https://cataas.com/cat')
    .then(response => response.blob())
    .then(blob => {
        const blobUrl = URL.createObjectURL(blob)

        const img = new Image();

        img.onload = () => {
            catImage.src = blobUrl;
            catImage.classList.remove("loading")
        };

        img.src = blobUrl;
    })
}

btnNext.addEventListener('click', () =>{
    getImage(),
    getFact()
})

}