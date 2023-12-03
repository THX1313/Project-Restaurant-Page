
// old way, module scope global
// const pageLoad = require("./pageLoad.js");

// pageLoad.loadPage();

// new way, module scope local to the module
import createRestaurantHomePage from './restaurant.js';

function initialLoad() {
    createRestaurantHomePage();
}

export default initialLoad;