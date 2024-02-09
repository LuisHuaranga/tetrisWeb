import {CONFIG} from "./config.js"

    var blockSize = CONFIG.BLOCK_SIZE; // Tamaño de cada bloque en píxeles
    var canvasWidth = CONFIG.CANVAS_WIDTH; //ancho del canva
    var canvasHeight = CONFIG.CANVAS_HEIGHT;

class Tetris {

    constructor() {
       
        this.init();
    }

  init() {
    this.dibujarCuadricula();
  }

  dibujarCuadricula() {
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
}

const tetrisGame = new Tetris();
