export function getTranslate(texto){
    fetch(`https://api.mymemory.translated.net/get?q=${texto}&langpair=en|pt-BR`)
        .then(response => response.json())
        .then(body => body.responseData.translatedText)
        .then(response => {
            const pFact = document.querySelector('#catFact');
            pFact.innerText = response 
        })  
    }

