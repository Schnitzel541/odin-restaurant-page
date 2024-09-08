import schnitzel from "../assets/schnitzel.jpg";
import turkishBread from "../assets/turkish-bread.jpg";
import lemonCake from "../assets/lemon-cake.jpg";

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
    domLogic.createElement("p", "A delicious, spicy schnitzel with extra lemon flavouring");
    domLogic.addImage(schnitzel);

    domLogic.createElement("h3", "Turkish bread");
    domLogic.createElement("p", "Break away and eat!");
    domLogic.addImage(turkishBread);

    domLogic.createElement("h3", "Strawberry lemon cake");
    domLogic.createElement("p", "Powerful, fruity and robust!");
    domLogic.addImage(lemonCake);
};