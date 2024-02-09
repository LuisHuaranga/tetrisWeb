import { BLOCK_SIZE, CANVAS_WIDTH, CANVAS_HEIGHT } from './constantes.js';

//dibujando en canvas
const canvas = document.getElementById("game-board");
const cuadro1 = canvas.getContext("2d");
const ctx = canvas.getContext("2d");

//Constantes
var blockSize = BLOCK_SIZE; // Tamaño de cada bloque en píxeles
var canvasWidth = CANVAS_WIDTH; //ancho del canva
var canvasHeight = CANVAS_HEIGHT; //altura del canva


var teclaPulsada = null;
var positionY = 0;

var filas = CANVAS_HEIGHT/BLOCK_SIZE;
var columnas = CANVAS_WIDTH/BLOCK_SIZE;

// Crear un array bidimensional vacío, agregar las columnas 
var matriz = new Array(filas);

for (var i = 0; i < filas; i++) {
  matriz[i] = new Array(columnas);
}


matriz.forEach((element,index)=>{
  matriz[index]= new Array(columnas);
})


function dibujarCuadricula() {
  for (var x = 0; x <= canvasWidth; x += blockSize) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvasHeight);
  }

  for (var y = 0; y <= canvasHeight; y += blockSize) {
    ctx.moveTo(0, y);
    ctx.lineTo(canvasWidth, y);
  }

  ctx.strokeStyle = "#000"; // Color de las líneas de la cuadrícula
  ctx.stroke();
}

function dibujarCuadrado(cuadrado, x, y, color) {

  cuadrado.fillStyle = color;
  cuadrado.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
}

function borrarCuadrado(cuadrado, x, y) {
  cuadrado.clearRect(x * blockSize, y * blockSize, blockSize, blockSize);
}

var estadoAnterior = false;
var estadoActual;

function game() {
  dibujarCuadrado(cuadro1, 0, positionY, "#ff0000");
  dibujarCuadricula();
}

function moverAbajo(){
  estadoActual = (teclaPulsada == "ArrowDown")
  if ( estadoActual && estadoAnterior == false) {
    borrarCuadrado(cuadro1, 0, positionY);
    positionY++;
    dibujarCuadrado(cuadro1, 0, positionY, "#ff0000");
    console.log("PULSASTE:" + teclaPulsada);
  }
  estadoAnterior = estadoActual;
}

window.addEventListener("keydown", (event) => {
  teclaPulsada = event.key;
  moverAbajo();
  console.log("abajito")
});

window.addEventListener("keyup", (event) => {
  teclaPulsada = null;
  estadoAnterior = false;
});

setInterval(game, 1000 / 30);


