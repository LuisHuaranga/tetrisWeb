import { FIGURA } from "./figuras-constantes.js"
import { Bloque } from "./bloque.js";

export class Figura {

    constructor(x = 0,y = 0, tipoFigura = FIGURA.FIGURA_BLOQUE, color){
        this.x = x;
        this.y = y;
        this.tipoFigura = tipoFigura.map(bloque => new Bloque(bloque.x, bloque.y , bloque.valor)); // Haciendo una copia de la figura para no hacer referencia
        this._color = color;

        //Dando coordenadas y color a los bloques
        this.tipoFigura.forEach(bloque => {
            bloque.x += x;
            bloque.y += y;
            bloque.color = (bloque.valor) ? ((color) ? color : Bloque.COLOR_PREDETERMINADO) : Bloque.SIN_COLOR;            
        });
    }

    get color(){
        return this._color;
    }
    
    //cuando se asigna color a la figura se asigna al bloque
    set color(nuevoColor){  
        this._color = nuevoColor;
        this.tipoFigura.forEach(bloque => {
            bloque.color = nuevoColor;
        });
    }

    moverAbajo() {
        this.y++;
        this.tipoFigura.forEach(bloque => {
            bloque.moverAbajo();
        })
    }

    moverArriba() {
        this.y--;
        this.tipoFigura.forEach(bloque => {
            bloque.moverArriba();
        })
    }

    moverDerecha(){
        this.x++;
        this.tipoFigura.forEach(bloque => {
            bloque.moverDerecha();
        })
    }

    moverIzquierda(){
        this.x--;
        this.tipoFigura.forEach(bloque => {
            bloque.moverIzquierda();
        })

    }

    coordenadaYMinima() {
        let minY = this.tipoFigura[0].y;

        this.tipoFigura.forEach(bloque => {
            if(bloque.y < minY){
                minY = bloque.y;
            }
        });
        
        return minY;
    }

    coordenadaYMaxima() {
        let maxY = this.tipoFigura[0].y;

        this.tipoFigura.forEach(bloque => {
            if(bloque.y > maxY){
                maxY = bloque.y;
            }
        });

        return maxY;
    }

    coordenadaXIzquierda() {
        let minX = this.tipoFigura[0].x;

        this.tipoFigura.forEach(bloque => {
            if(bloque.x < minX){
                minX = bloque.x;
            }
        });

        return minX;
    }

    coordenadaXDerecha() { 
        let maxX = this.tipoFigura[0].x;

        this.tipoFigura.forEach(bloque => {
            if(bloque.x > maxX){
                maxX = bloque.x;
            }
        });

        return maxX;
    }

}
