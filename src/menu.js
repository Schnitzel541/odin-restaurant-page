const contentDiv = document.querySelector("#content");


const addImage = (fileName) => {
    const image = document.createElement("img");
    image.src = `../assets/${fileName}`;
    contentDiv.appendChild(image);
}

export const menu = () => {
    addImage("restaurant.jpg");
};