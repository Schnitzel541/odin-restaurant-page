import restaurantImage from '../assets/restaurant.jpg'
const contentDiv = document.querySelector("#content");

export const homePage = () => {
    const listItems = [];

    const welcome = document.createElement("h3");
    welcome.textContent = "Welcome to Schnitzel's restaurant!";
    contentDiv.appendChild(welcome);

    const image = document.createElement("img");
    image.src = restaurantImage;
    image.alt = "restaurant lounge";
    contentDiv.appendChild(image);

    const section = document.createElement("section");
    section.innerHTML = `Our recipes are rated among the best in the world! 
                        <br> <br> Recently, we have partnered up with some of the best cooks 
                        in the industry to provide you, the customer, 
                        with a quality dining experience.<br> Have a look at the 
                        ratings of some of our customers:`
    contentDiv.appendChild(section);

    const unorderedList = document.createElement("ul");
    contentDiv.appendChild(unorderedList);
    for(let i = 0; i < 4; i++) {
        const listItem = document.createElement("li");
        listItems.push(listItem)
    };
    listItems.forEach((item, index) => {
        unorderedList.appendChild(item);
        switch (index) {
            case 0:
                item.textContent = "Gordom Ramsay: ★★★★★";
                break;
            case 1:
                item.textContent = "Jamie Oliver: ★★★★★";
                break;
            case 2:
                item.textContent = "Dave: ★★★★";
                break;
            case 3:
                item.textContent = "Guy who hates food: ★★★";
                break;
        }
    });
};
