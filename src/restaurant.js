
import './style.css';
import Icon from './icon.png';

const createRestaurantHomePage = () => {
    
    const content = document.querySelector('#content');

    const welcome = document.createElement('div');
    welcome.classList.add("welcome");

    welcome.classList.add("pageContent"); // for adding and removing

    welcome.textContent = "Welcome to Bette's Oceanview Diner";

    const tagline = document.createElement('div');
    tagline.classList.add("tagline");
    tagline.textContent = "The Premier Diner in Berkeley, CA";

    const description = document.createElement('div');
    description.classList.add("description");
    description.textContent = "Bette's Oceanview Diner is the best diner in Berkeley, CA. If you are in the mood for quality food, we have some delicious items for you. We are insistent on only using fresh and high-quality ingredients, and our bakery is the perfect place to spend time with your friends and family. We are known for our outstanding food and service, providing our guests with a dining experience they will never forget";

    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("icon");

    content.appendChild(myIcon);
    content.appendChild(welcome);
    content.appendChild(tagline);
    content.appendChild(description); 
}

// remember that every function that is imported into another js file needs this line of code. 
export default createRestaurantHomePage; // try with no default