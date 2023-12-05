import pageLoad from './pageLoad';

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

createTabs();
pageLoad();

// basic implementation of tabbed browsing in html/js
/* <div id="container">
  <div id="page1">Content of page 1</div>
  <div id="page2">Content of page 2</div>
  <div id="page3">Content of page 3</div>
</div>
<button onclick="showPage('page1')">Page 1</button>
<button onclick="showPage('page2')">Page 2</button>
<button onclick="showPage('page3')">Page 3</button>

<script>
function showPage(pageId) {
  const container = document.getElementById("container");
  const pages = container.querySelectorAll("div");

  for (const page of pages) {
    page.style.display = "none";
  }

  const selectedPage = document.getElementById(pageId);
  selectedPage.style.display = "block";
}
</script> */