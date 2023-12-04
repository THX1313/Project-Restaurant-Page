
// old way, module scope global
// const pageLoad = require("./pageLoad.js");

// pageLoad.loadPage();

// new way, module scope local to the module
import createRestaurantHomePage from './restaurant.js';

import createTabs from './tabs.js';

function initialLoad() {
    createTabs();
    createRestaurantHomePage();
}

export default initialLoad;