import { getTranslate } from "./translate.js";

export default function initFacts(){}

export function getFact(){
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(body => {
        const texto = body.fact
        getTranslate(texto)
    })
}