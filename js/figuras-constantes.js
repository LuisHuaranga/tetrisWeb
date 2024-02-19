import { Bloque } from "./bloque.js"
export const FIGURA = {
    FIGURA_BLOQUE: [
        new Bloque(0, 0),
    ],
    FIGURA_T: [
        new Bloque(1, 0),
        new Bloque(2, 0),
        new Bloque(3, 0),
        new Bloque(2, 1)
    ],  
    FIGURA_J: [
        new Bloque(1, 0),
        new Bloque(2, 0),
        new Bloque(3, 0),
        new Bloque(3, 1)
    ],
    FIGURA_Z: [
        new Bloque(1, 0),
        new Bloque(2, 0),
        new Bloque(2, 1),
        new Bloque(3, 1)
    ],
    FIGURA_O: [
        new Bloque(1, 0),
        new Bloque(2, 0),
        new Bloque(1, 1),
        new Bloque(2, 1)
    ],
    FIGURA_S: [
        new Bloque(2, 0),
        new Bloque(3, 0),
        new Bloque(1, 1),
        new Bloque(2, 1)
    ],
    FIGURA_L: [
        new Bloque(1, 0),
        new Bloque(2, 0),
        new Bloque(3, 0),
        new Bloque(1, 1)
    ],
    FIGURA_I: [
        new Bloque(0, 0),
        new Bloque(1, 0),
        new Bloque(2, 0),
        new Bloque(3, 0)
    ],
};

function agregarValorAFiguras(figuras) {
    figuras.forEach(figura => {
        figura.forEach(bloque => {
            bloque.valor = 1;
        });
    });
}

agregarValorAFiguras(Object.values(FIGURA));