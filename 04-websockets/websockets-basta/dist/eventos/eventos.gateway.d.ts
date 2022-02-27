import { Socket } from "socket.io";
export declare class EventosGateway {
    unirseSala(message: {
        salaId: string;
        nombre: string;
    }, socket: Socket): string;
    iniciarPartida(message: {
        salaId: string;
    }, socket: Socket): string;
    enviarMensaje(message: {
        salaId: string;
        nombre: string;
        mensaje: string;
    }, socket: Socket): string;
    decirBasta(message: {
        salaId: string;
        nombre: string;
    }, socket: Socket): string;
    abandonarSala(message: {
        salaId: string;
        nombre: string;
    }, socket: Socket): string;
    enviarRespuestas(message: {
        salaId: string;
        respuestas: any;
    }, socket: Socket): string;
    enviarDatosJuego(message: {
        salaId: string;
        datos: any;
    }, socket: Socket): string;
    enviarLetra(message: {
        salaId: string;
        letra: string;
    }, socket: Socket): string;
    enviarPuntos(message: {
        salaId: string;
        puntos: [];
    }, socket: Socket): string;
}
