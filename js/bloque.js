import { COLORES } from "./colores.js";

export class Bloque {

    constructor(x = 0, y = 0, valor = 0, color) {
        this.x = x;
        this.y = y;
        this._valor = valor;
        this.color = (valor) ? ((color) ? color : Bloque.COLOR_PREDETERMINADO) : Bloque.SIN_COLOR;
    }

    get valor() {
        return this._valor;
    }

    set valor(nuevoValor) { 
        this._valor = nuevoValor;
        if(!nuevoValor){
            this.color = Bloque.COLOR_PREDETERMINADO;
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
        this.x--;
    }
    
}

Bloque.SIN_COLOR = COLORES.SinColor;
Bloque.COLOR_PREDETERMINADO = COLORES.fondo;