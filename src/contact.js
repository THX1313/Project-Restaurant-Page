// alert('menu');


import './style.css';
import Icon from './icon.png';

const createContactPage = () => {
    
    const content = document.querySelector('#content');

    const pageContent = document.createElement('div');
    pageContent.classList.add("page-content");

    const phoneNumber = document.createElement('div');
    phoneNumber.classList.add("phone-number");
    phoneNumber.textContent = "Phone Number: 867-5309";

    const email = document.createElement('div');
    email.classList.add("email");
    email.textContent = "Email: bettesdiner@gmail.com";


    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("icon");

    pageContent.appendChild(myIcon);
    pageContent.appendChild(phoneNumber);
    pageContent.appendChild(email);

    content.appendChild(pageContent);
}

// remember that every function that is imported into another js file needs this line of code. 
export default createContactPage; // try with no default