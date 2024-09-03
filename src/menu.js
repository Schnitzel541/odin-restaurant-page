const contentDiv = document.querySelector("#content");

export const menu = () => {
    const pTag = document.createElement('p');
    pTag.textContent = "Menu"
    contentDiv.appendChild(pTag);
};