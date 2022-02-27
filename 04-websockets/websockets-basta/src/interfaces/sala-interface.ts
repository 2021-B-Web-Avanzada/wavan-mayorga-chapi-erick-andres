export interface SalaInterface {
    salaId: number,
    host: string,
    datosJuego: {
        rondas: number,
        jugadores: number,
        password: String,
        categories: String[],
        letras: String[]
    }
    usuarios: {
        nombre: string,
        puntos: number
    }[]
}