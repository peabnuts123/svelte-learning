// Basic module is a demonstation of passing basic data
//  and mounting a module in the DOM
var basicModule = new BasicModule({
    target: document.querySelector("#basicModule"),
    data: {
        testMessage: "Hello world, I am the basic module test message"
    }
});