const text = "Hello, I'm Shubham";
const speed = 100; // milliseconds
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("home-content-h1").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;

