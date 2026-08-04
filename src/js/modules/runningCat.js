export default function initRunningCat(){

}

const cat = document.querySelector(".catGif");
const container = cat.parentElement;

function runRight() {
    const distance = container.clientWidth - cat.offsetWidth;

    cat.style.transform = "scaleX(1)";

    const animation = cat.animate(
        [
            { left: "0px" },
            { left: `${distance}px` }
        ],
        {
            duration: 5000,
            easing: "linear",
            fill: "forwards"
        }
    );

    animation.onfinish = runLeft;
}

function runLeft() {
    const distance = container.clientWidth - cat.offsetWidth;

    cat.style.transform = "scaleX(-1)";

    const animation = cat.animate(
        [
            { left: `${distance}px` },
            { left: "0px" }
        ],
        {
            duration: 5000,
            easing: "linear",
            fill: "forwards"
        }
    );

    animation.onfinish = runRight;
}

runRight();