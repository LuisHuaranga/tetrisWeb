import { COLORES } from "./colores.js";


export class Bloque {

    constructor(x = 0, y = 0, valor = 0, color) {
        this.x = x;
        this.y = y;
        this.valor = valor;
        if (this.valor) {
            this.color = (color) ? color : Bloque.COLOR_PREDETERMINADO;
        } else {
            this.color =  Bloque.SIN_COLOR;
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

Bloque.SIN_COLOR = COLORES.SinColor;
Bloque.COLOR_PREDETERMINADO = COLORES.Turquesa;