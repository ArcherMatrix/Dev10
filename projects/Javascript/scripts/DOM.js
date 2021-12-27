let div = document.querySelector(".container");

let newNode = document.createElement("p");
newNode.innerHTML = "DOM manipulation is <strong>super cool</strong>!";

div.appendChild(newNode);