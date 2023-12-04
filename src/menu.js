// alert('menu');


import './style.css';
import Icon from './icon.png';

const createMenuPage = () => {
    
    const content = document.querySelector('#content');

    const pageContent = document.createElement('div');
    pageContent.classList.add("page-content");

    const breakfast = document.createElement('div');
    breakfast.classList.add("breakfast");
    breakfast.textContent = "Breakfast";

    const lunch = document.createElement('div');
    lunch.classList.add("lunch");
    lunch.textContent = "Lunch";


    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("icon");

    pageContent.appendChild(myIcon);
    pageContent.appendChild(breakfast);
    pageContent.appendChild(lunch);

    content.appendChild(pageContent);
}

export default createMenuPage; // try with no default