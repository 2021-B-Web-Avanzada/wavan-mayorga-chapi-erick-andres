export interface SalaInterface {
    salaId: number,
    host: string,
    datosJuego: {
        rondas: number,
        jugadores: number,
        password?: string,
        categories: string[],
        letras: string[]
    }
    usuarios: {
        nombre: string,
        puntos: number
    }[]
}
