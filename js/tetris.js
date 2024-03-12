import { Bloque } from "./bloque.js";
import { COLORES } from "./colores.js";
import { Controles } from "./controles.js";


export class Tetris {


  constructor(blockSize, filas, columnas, canvasID) {
    this.blockSize = blockSize;
    this.filas = filas;
    this.columnas = columnas;
    this._canvas = document.getElementById(canvasID);
    this._matrixTetris = [];
    this._limitInferior = this.filas - 1;
    this._limitDerecha = this.columnas - 1
    this._canvas.style.backgroundColor = COLORES.fondo;
    this._init();
  }
  
  _init() {
    this._dibujarCuadricula();
    this._construirMatriz();  
  }

  _construirMatriz() {
    
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


    ctx.strokeStyle = COLORES.Rojo; // Color de las líneas de la cuadrícula
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
      this._dibujarBloque(this._matrixTetris[index]);
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
      figura.color = figura.color;
      figura.tipoFigura.forEach(bloque => {
      bloque.valor = valor;
      this._escribirBloque(bloque); 
    })
  }

  moverFiguraAbajo(figura){
    if( figura.coordenadaYMaxima() < this._limitInferior ){
      this.escribirFigura(figura,0);
      figura.moverAbajo();
      this.escribirFigura(figura,1);
    }
  }
  
  moverFiguraIzquierda(figura){
    if( figura.coordenadaXIzquierda() > 0 ){
      this.escribirFigura(figura,0);
      figura.moverIzquierda();
      this.escribirFigura(figura,1);
    }
  }

  moverFiguraDerecha(figura){
    if( figura.coordenadaXDerecha() < this._limitDerecha ){
      this.escribirFigura(figura,0);
      figura.moverDerecha();
      this.escribirFigura(figura,1);
    }
  }

  configurarControles(figura) {

    const controles = new Controles();

    controles.mapearTecla("ArrowLeft", () => {
        

      }, () => {
        console.log("IZQ")
        this.moverFiguraIzquierda(figura);
    });

    controles.mapearTecla("ArrowRight", () => {
        

      }, () => {
      this.moverFiguraDerecha(figura);
    });


    controles.mapearTecla("ArrowUp", () => {
        

      }, () => {
    
    });

    controles.mapearTecla("ArrowDown", () => {
    
    }, () => {
        this.moverFiguraAbajo(figura);
    });

}




}
