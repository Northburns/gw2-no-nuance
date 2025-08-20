import printMe from './print.js';

import './api-holder.js';
import apiHolder from './api-holder.js';

console.log("HELLO!");

function hello() {
    console.log("Hello from function!");
}

window.gw2 = {
    hello: printMe,
    apiHolder: apiHolder,
}
export default {
    hello: hello,
}
