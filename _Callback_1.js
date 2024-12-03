//Write a function greet(name, callback) that takes a name as input and calls a callback function to print a greeting message, e.g., "Hello, !".

function Greet(name,callback){
    callback(name);
}
function printGreeting(name){
    console.log(`Konichiwaa....................${name}-san!!!!!!`);
}
Greet("Prerna",printGreeting)