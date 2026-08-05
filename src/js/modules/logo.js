export default function initLogo(){

    function getLogo(){
        fetch('./src/json/logo.json')
        .then(response => response.json())
        .then(body => {
            const numLogos = body.length;
            const random = Math.floor(Math.random() * numLogos)
            const imageId = body[random].id;
            const color = body[random].color;
            const hoverColor = body[random].hoverColor;
            const activeColor = body[random].activeColor;
            const btnNext = document.querySelector('#next');
            const logo = document.querySelector('#logo');
            
            logo.src = `./src/img/logo/${imageId}.png`;
            logo.style.setProperty('--shadow-color', color);
            btnNext.style.setProperty('--main-color', color);
            btnNext.style.setProperty('--hover-color', hoverColor);
            btnNext.style.setProperty('--active-color', activeColor);

        })
    }
    getLogo()
    
}