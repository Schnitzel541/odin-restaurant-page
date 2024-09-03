const contentDiv = document.querySelector("#content");

export const contact = () => {
    const pTag = document.createElement("p");
    pTag.textContent = "Contact";
    contentDiv.appendChild(pTag);
}