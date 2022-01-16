// Write your code here!
const myElement = document.getElementById("main")
myElement.remove("main");

const newHeader = document.createElement("h1");
    newHeader.textContent ="victory";
    newHeader.id= "victory";
    newHeader.innerHTML= "is the champion";
