import './style.css';
import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu.js";
import createContactPage from "./contact.js"

const createTabs = () => {
    const content = document.querySelector('#content');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');

    div1.setAttribute('id', "homeButton");
    div2.setAttribute('id', "menuButton");
    div3.setAttribute('id', "contactButton");

    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');
    div4.classList.add('nav');

    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact";

    // Write the tab - switching logic inside of index.js.You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.
        
    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    });

    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    });

    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    });

    div4.appendChild(div1);
    div4.appendChild(div2);
    div4.appendChild(div3);

    content.appendChild(div4);

}

function clearContent() {
    
    const content = document.querySelector('#content');

    const pageContent = document.querySelector('.page-content');

    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default createTabs;