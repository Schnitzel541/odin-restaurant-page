import schnitzel from "../assets/schnitzel.jpg";
import turkishBread from "../assets/turkish-bread.jpg";


const contentDiv = document.querySelector("#content");

const domLogic = (function () {
    const addImage = (src) => {
        const image = document.createElement("img");
        image.src = src;
        contentDiv.appendChild(image);
    }

    const createElement = (element, textContent) => {
        const newElement = document.createElement(`${element}`);
        newElement.textContent = textContent;
        contentDiv.appendChild(newElement);
    }

    return { addImage, createElement };
})();



export const menu = () => {
    domLogic.createElement("h3", "Schnitzel with lemon");
    domLogic.addImage(schnitzel);

    domLogic.createElement("h3", "Turkish bread");
    domLogic.addImage(turkishBread);
};