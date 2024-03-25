export class Controles {
    constructor() {
        this.accionesTecla = {};
        this._inicializarEventos();
    }

    mapearTecla(tecla, accionPresionada, accionSoltada) {
        this.accionesTecla[tecla] = {
            presionada: accionPresionada,
            soltada: accionSoltada
        };
    }

    _inicializarEventos() {
        window.addEventListener("keydown", (event) => {
            this._ejecutarAccion(event.code, "presionada");
        });
        
        window.addEventListener("keyup", (event) => {
            console.log(event.code),
            this._ejecutarAccion(event.code, "soltada");
        });
    }

    _ejecutarAccion(tecla, tipo) {
        if (tecla in this.accionesTecla && tipo in this.accionesTecla[tecla]) {
            this.accionesTecla[tecla][tipo](); // Ejecuta la acción correspondiente
        }
    }
}
