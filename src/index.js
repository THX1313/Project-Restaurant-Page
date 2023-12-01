// Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is.

import './style.css';
import Icon from './icon.png';


const container = document.querySelector('#content');


// const background = document.createElement("img", src = "images/background.png", alt = "Image of restaurant");

const welcome = document.createElement('div');
welcome.classList.add("welcome");
welcome.textContent = "Welcome to Bette's Oceanview Diner";


const tagline = document.createElement('div');
tagline.classList.add("tagline");
tagline.textContent = "The Premier Diner in Berkeley, CA";

const description = document.createElement('div');
description.classList.add("description");
description.textContent = "Bette's Oceanview Diner is the best diner in Berkeley, CA. If you are in the mood for quality food, we have some delicious items for you. We are insistent on only using fresh and high-quality ingredients, and our bakery is the perfect place to spend time with your friends and family. We are known for our outstanding food and service, providing our guests with a dining experience they will never forget";



function component() {
    const element = document.createElement('div');

   // Add the image to our existing div.
  const myIcon = new Image();

  myIcon.src = Icon;
  
  
 
  element.appendChild(myIcon);
  
  element.classList.add("icon");
 
    return element;
  }
 
container.appendChild(component());
container.appendChild(welcome);
container.appendChild(tagline);
container.appendChild(description);