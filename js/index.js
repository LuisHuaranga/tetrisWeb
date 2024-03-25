import { Tetris } from "./tetris.js"
import { Figura } from "./figura.js";
import { FIGURA } from "./figuras-constantes.js";
import { COLORES } from "./colores.js";

const tetris = new Tetris(25,20,10,"game-board");

var figura = new Figura(3, 7, FIGURA.FIGURA_L  , COLORES.Marron);

tetris.configurarControles(figura);

tetris.escribirFigura(figura,1);

  
tetris.pintarTablero();
