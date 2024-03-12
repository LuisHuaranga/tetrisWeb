export class Controles {
    constructor() {
        this.accionesTecla = {};
        this.inicializarEventos();
    }

    mapearTecla(tecla, accionPresionada, accionSoltada) {
        this.accionesTecla[tecla] = {
            presionada: accionPresionada,
            soltada: accionSoltada
        };
    }

    inicializarEventos() {
        window.addEventListener("keydown", (event) => {
            this.ejecutarAccion(event.code, "presionada");
        });
        
        window.addEventListener("keyup", (event) => {
            // console.log(event.key)
            this.ejecutarAccion(event.code, "soltada");
        });
    }

    ejecutarAccion(tecla, tipo) {
        if (tecla in this.accionesTecla && tipo in this.accionesTecla[tecla]) {
            this.accionesTecla[tecla][tipo](); // Ejecuta la acción correspondiente
        }
    }
}
