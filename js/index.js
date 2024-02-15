import { Tetris } from "./tetris.js"
import { Figura } from "./figura.js";
import { Bloque } from "./bloque.js";
import { COLORES } from "./colores.js";

const tetris = new Tetris(30,20,10,"game-board");

const figura = new Figura(4, 3, tetris.figura.FIGURA_L , COLORES.Marron);

console.log(figura);

tetris.escribirFigura(figura);
tetris.pintarTablero();

// function borrarCuadrado(cuadrado, x, y) {
//   cuadrado.clearRect(x * blockSize, y * blockSize, blockSize, blockSize);
// }

// var estadoAnterior = false;
// var estadoActual;

// function game() {
//   dibujarCuadrado(cuadro1, 0, positionY, "#ff0000");
//   dibujarCuadricula();
// }

// function moverAbajo(){
//   estadoActual = (teclaPulsada == "ArrowDown")
//   if ( estadoActual && estadoAnterior == false) {
//     borrarCuadrado(cuadro1, 0, positionY);
//     positionY++;
//     dibujarCuadrado(cuadro1, 0, positionY, "#ff0000");
//     console.log("PULSASTE:" + teclaPulsada);
//   }
//   estadoAnterior = estadoActual;
// }

// window.addEventListener("keydown", (event) => {
//   teclaPulsada = event.key;
//   moverAbajo();
//   console.log("abajito")
// });

// window.addEventListener("keyup", (event) => {
//   teclaPulsada = null;
//   estadoAnterior = false;
// });



