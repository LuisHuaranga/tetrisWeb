import { Bloque } from "./bloque.js"
export const FIGURA = {
    FIGURA_BLOQUE: [
        new Bloque(0, 0),
    ],

    FIGURA_CUADRADO: [
        new Bloque(0, 0),
        new Bloque(0, 1),
        new Bloque(1, 0),
        new Bloque(1, 1)
    ],
    FIGURA_L: [
        new Bloque(0, 0),
        new Bloque(0, 1),
        new Bloque(0, 2),
        new Bloque(1, 2)
    ],
    FIGURA_T: [
        new Bloque(0, 1),
        new Bloque(1, 0),
        new Bloque(1, 1),
        new Bloque(1, 2)
    ]    
};

function agregarValorAFiguras(figuras) {
    figuras.forEach(figura => {
        figura.forEach(bloque => {
            bloque.valor = 1;
        });
    });
}

agregarValorAFiguras(Object.values(FIGURA));