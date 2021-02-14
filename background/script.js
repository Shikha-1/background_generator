var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
function funGradient () {
var body = document.getElementById("gradient");
gradient.style.background="linear-gradient(to right," +color1.value +"," +color2.value +")";
};
color1.addEventListener("input", funGradient);
color2.addEventListener("input", funGradient);
