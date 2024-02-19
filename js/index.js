import { Tetris } from "./tetris.js"
import { Figura } from "./figura.js";
import { FIGURA } from "./figuras-constantes.js";
import { COLORES } from "./colores.js";
import { Bloque } from "./bloque.js";


const tetris = new Tetris(25,20,10,"game-board");

var figura = new Figura(3, 0, FIGURA.FIGURA_I  , COLORES.Marron);
// var figura2 = new Figura(4, 4, FIGURA.FIGURA_T , COLORES.Naranja);

var bloque = new Bloque(3,5,1);
tetris.escribirFigura(figura,1);
// tetris.escribirFigura(figura2,1);

  
tetris.pintarTablero();
  

window.addEventListener("keydown", (event) => {
  let teclaPulsada = event.key;
});

window.addEventListener("keyup", (event) => {
  let teclaPulsada = event.code ;

  if(teclaPulsada === "KeyA"){
    figura.color = COLORES.Amarillo;
    tetris.escribirFigura(figura,1);
    console.log(figura);
    // tetris.imprimitMatriz();
    
  }
  else{
    tetris.escribirFigura(figura,0);
    // console.log(figura2);

  }

  tetris.pintarTablero();
  console.log(teclaPulsada)
});






