// Q: Write a function createHelloWorld. It should return a new function that always returns "Hello World".
// Solution:

function createHelloWorld() {
  function helloWorld() {
    return "Hello World";
  }
  return helloWorld;
}

const sayHelloWorld = createHelloWorld();

console.log(sayHelloWorld());