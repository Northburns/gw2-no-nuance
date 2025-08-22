import printMe from './print.js';

import './api-holder.js';
import apiHolder from './api-holder.js';
import tables from './tables.js';
import util from './util.js';

console.log("HELLO!");

function hello() {
    console.log("Hello from function!");
}

window.gw2 = {
    apiHolder: apiHolder,
    tables: tables,
    util: util,
}
