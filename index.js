const body = document.getElementsByTagName("body");
const botonCambiar = document.getElementById("boton-cambiar");
const botonAtras = document.getElementById("boton-atras");
const textoHex = document.getElementById("textoHex");
const textoRGB = document.getElementById("textoRGB");
let index = 0;
let colorAnteriorRGB = ["R:0 G:0 B: 0"];
let colorAnteriorHex = ["#000000"];
let firstRed,
  secondRed,
  firstGreen,
  secondGreen,
  firstBlue,
  secondBlue,
  red,
  blue,
  green = 0;
let colorArray = [];

body[0].style.backgroundColor = "#000000";

function conversionHexRGB(colorHex) {
  colorArray = colorHex.split("");
  firstRed = parseInt(colorArray[0], 16) * 16;
  secondRed = parseInt(colorArray[1], 16);
  red = firstRed + secondRed;

  firstGreen = parseInt(colorArray[2], 16) * 16;
  secondGreen = parseInt(colorArray[3], 16);
  green = firstGreen + secondGreen;

  firstBlue = parseInt(colorArray[4], 16) * 16;
  secondBlue = parseInt(colorArray[5], 16);
  blue = firstBlue + secondBlue;
  return "R:" + red + " G:" + green + " B:" + blue;
}

function generarColor() {
  let color = "";
  color += Math.floor(Math.random() * (16777215 - 0) + 0)
    .toString(16)
    .toUpperCase();
  while (color.split("").length < 6) {
    color += Math.floor(Math.random() * (16 - 0) + 0)
      .toString(16)
      .toUpperCase();
  }
  return color;
}

botonCambiar.addEventListener("click", function () {
  let colorAleatorio = generarColor();
  body[0].style.backgroundColor = "#" + colorAleatorio;
  textoHex.innerText = "#" + colorAleatorio;
  textoRGB.innerText = conversionHexRGB(colorAleatorio);
  colorAnteriorHex.push("#" + colorAleatorio);
  colorAnteriorRGB.push(conversionHexRGB(colorAleatorio));
  index++;
});

botonAtras.addEventListener("click", function () {
  if (colorAnteriorHex.length > 1) {
    colorAnteriorRGB.pop();
    colorAnteriorHex.pop();
    index--;
  }
  console.log(colorAnteriorHex.length);
  textoHex.innerText = colorAnteriorHex[index];
  textoRGB.innerText = colorAnteriorRGB[index];
  body[0].style.backgroundColor = colorAnteriorHex[index];
});
