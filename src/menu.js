const contentDiv = document.querySelector("#content");

const domLogic = (function () {
    const addImage = (fileName) => {
        const image = document.createElement("img");
        image.src = `../assets/${fileName}`;
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
    domLogic.addImage("schnitzel.jpg");

    domLogic.createElement("h3", "Turkish bread");
    domLogic.addImage("turkish-bread.jpg")
};