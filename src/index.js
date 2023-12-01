// Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is.

const container = document.querySelector(#content);


const background = document.createElement("img", src = "images/background.png", alt = "Image of restaurant");

const welcome = document.createElement(HTMLDivElement);

welcome.innerText = "Welcome to Oceanview To-Go Deli & Bakery";


const tagline = document.createElement(HTMLDivElement);

tagline.innerText = "The Premier Bakery in Berkeley, CA";

const description = document.createElement(HTMLDivElement);

description.textContent = "Oceanview To-Go Deli & Bakery is the go-to bakery and deli in Berkeley, CA. If you are in the mood for quality food, we have some delicious items for you. We are insistent on only using fresh and high-quality ingredients, and our bakery is the perfect place to spend time with your friends and family. We are known for our outstanding food and service, providing our guests with a dining experience they will never forget";

container.appendChild(background);
container.appendChild(welcome);
container.appendChild(tagline);
container.appendChild(description);