import { FIGURA } from "./figuras-constantes.js"
import { Bloque } from "./bloque.js";

export class Figura {

    constructor(x = 0,y = 0, tipoFigura = FIGURA.FIGURA_BLOQUE, color){
        this.x = x;
        this.y = y;
        this.tipoFigura = tipoFigura;
        this.color = color;
        this.tipoFigura = JSON.parse(JSON.stringify(tipoFigura));
        
        for (let i = 0; i < this.tipoFigura.length; i++) {
            this.tipoFigura[i].color = color ? color : Bloque.COLOR_PREDETERMINADO;  
        }
    }

    moverAbajo() {
        this.y++;
    }

    moverArriba() {
        this.y--;
    }

    moverDerecha(){
        this.x++;
    }

    moverIzquierda(){
        this.y--;
    }
}