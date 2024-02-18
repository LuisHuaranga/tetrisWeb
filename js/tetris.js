import { Bloque } from "./bloque.js";


export class Tetris {


  constructor(blockSize, filas, columnas, canvasID) {
    this.blockSize = blockSize;
    this.filas = filas;
    this.columnas = columnas;
    this._canvas = document.getElementById(canvasID);
    this._matrixTetris = [];
    this._init();
  }
  
  _init() {
    this._dibujarCuadricula();
    this._construirMatriz();  
  }

  _construirMatriz() {
    const tablero = [];
    
    for (let x = 0; x < this.columnas; x++) {
      for (let y = 0; y < this.filas; y++) {
        this._matrixTetris.push(new Bloque(x, y));
    }
  }
  
  }

  _dibujarCuadricula() {

    const ctx = this._canvas.getContext("2d");
    const canvasHeight = this.blockSize * this.filas;
    const canvasWidth = this.blockSize * this.columnas;

    this._canvas.width = canvasWidth;
    this._canvas.height = canvasHeight;

    ctx.strokeStyle = "#000"; // Color de las líneas de la cuadrícula
    ctx.beginPath();

    for (let x = 0; x <= canvasWidth; x += this.blockSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvasHeight);
    }

    for (let y = 0; y <= canvasHeight; y += this.blockSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(canvasWidth, y);
    }

    ctx.stroke();
  }

  _dibujarBloque(bloque) {
    const { _canvas: canvas, blockSize } = this
    const { x, y, color } = bloque
    const xBlock = x * blockSize;
    const yBlock = y * blockSize;
    const ctx = canvas.getContext("2d");


    // Establecer la sombra
    // ctx.shadowColor = 'black'; // Color de la sombra
    // ctx.shadowBlur = 10; // Desenfoque de la sombra
    // ctx.shadowOffsetX = 5; // Desplazamiento horizontal de la sombra
    // ctx.shadowOffsetY = 5; // Desplazamiento vertical de la sombra

    //color
    ctx.fillStyle = color;
    ctx.fillRect(xBlock, yBlock, blockSize, blockSize);
    
    // Establecer el color del borde y dibujar el borde del rectángulo
    ctx.strokeStyle = 'black'; // Color del borde
    ctx.lineWidth = 2; // Grosor del borde
    ctx.strokeRect(xBlock, yBlock, blockSize, blockSize); // Dibujar el borde

  }

  _escribirBloque(bloque) {
    const { x , y } = bloque;
    const index = this._matrixTetris.findIndex(block => block.x === x && block.y === y);
    if (index !== -1) {
      this._matrixTetris[index] = bloque;
    }
  }  

  imprimitMatriz() {
    console.log(this._matrixTetris);
  }

  pintarTablero() {
    this._matrixTetris.forEach(bloque => {  
        this._dibujarBloque(bloque);
    });
  }

  escribirFigura( figura , valor ) {
    figura.tipoFigura.forEach(bloque => {
      bloque.valor = valor;
      this._escribirBloque(bloque); 
    })
  }

}
