import printMe from './print.js';

console.log("HELLO!");

function hello() {
    console.log("Hello from function!");
}

window.gw2 = {
    hello: printMe
}
export default {
    hello: hello
}