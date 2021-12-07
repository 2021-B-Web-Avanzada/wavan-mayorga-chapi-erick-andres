interface Usuario{
    nombre: string;
    apellido: string;
    edad?: number;  //opcional
    sueldo?: number;     //opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string | 'BN';
    estadoActual: () => 'AP' | 'AF' | 'AT';
    calcularImpuesto: (impuesto) => number; //nuevoimpuesto, suelto + sueldo * impuesto
}

let user: Usuario = {
    nombre: 'Adrian',
    apellido: 'Eguez',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es ' + mensaje;
    },
    calcularImpuesto: impuesto => {
        return this.sueldo + this.sueldo + impuesto;
    },
    estadoActual:() => {
        switch(this.estado){
            case 'AC':
                return 'AP'
            case 'IN':
                return 'AF'
            case 'BN':
                return 'AT'
        }
    }
}