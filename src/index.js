import "./styles.css"
import { homePage } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

(() => {
    const contentDiv = document.querySelector("#content");
    homePage();
    const addListeners = () => {
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                switch (button.textContent) {
                    case "HOME":
                        contentDiv.innerHTML = "";
                        homePage();
                        break;
                    case "MENU":
                        contentDiv.innerHTML = "";
                        menu();
                        break;
                    case "CONTACT":
                        contentDiv.innerHTML = "";
                        contact();
                        break;
                }
            })
        })
    }
    addListeners();
})();

