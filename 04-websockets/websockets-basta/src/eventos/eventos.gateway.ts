import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Socket} from "socket.io";

@WebSocketGateway(8080,
    {
    cors: {
        origin: '*',
    }
})
export class EventosGateway{

    @SubscribeMessage('unirseSala')
    unirseSala(
        @MessageBody()
            message: {salaId: string, nombre: string},
        @ConnectedSocket()
            socket: Socket
    ){
        socket.join(message.salaId);
        const data = {
            mensaje: message.nombre + ' se unió a la sala',
            usuario: message.nombre
        } as any
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoUnirseSala', data)
        return 'ok'
    }

    @SubscribeMessage('iniciarPartida')
    iniciarPartida(
        @MessageBody()
            message: {salaId: string},
        @ConnectedSocket()
            socket: Socket
    ){
        socket.join(message.salaId);
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoIniciarPartida')
        return 'ok'
    }

    @SubscribeMessage('enviarMensaje')
    enviarMensaje(
        @MessageBody()
            message: {salaId: string, nombre: string, mensaje: string},
        @ConnectedSocket()
            socket: Socket
    ){
        socket.join(message.salaId);
        const nuevoMensaje = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
        } as any
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoMensajeSala', nuevoMensaje)
        return 'ok'
    }

    @SubscribeMessage('decirBasta')
    decirBasta(
        @MessageBody()
            message: {salaId: string, nombre: string},
        @ConnectedSocket()
            socket: Socket
    ){
        socket.join(message.salaId);
        const data = {
            mensaje: message.nombre + ' ha dicho Basta!',
            usuario: message.nombre
        } as any
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoDecirBasta', data)
        return 'ok'
    }

    @SubscribeMessage('abandonarSala')
    abandonarSala(
        @MessageBody()
            message: {salaId: string, nombre: string},
        @ConnectedSocket()
            socket: Socket
    ){
        socket.join(message.salaId);
        const data = {
            mensaje: message.nombre + ' salió de la sala',
            usuario: message.nombre
        } as any
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoAbandonarSala', data)
        return 'ok'
    }

    @SubscribeMessage('enviarRespuestas')
    enviarRespuestas(
        @MessageBody()
            message: {salaId: string, respuestas: any},
        @ConnectedSocket()
            socket: Socket
    ){
        socket.join(message.salaId);
        const respuestasEnviar = message.respuestas as any
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoEnviarRespuestas', respuestasEnviar)
        return 'ok'
    }

    @SubscribeMessage('enviarDatosJuego')
    enviarDatosJuego(
        @MessageBody()
            message: {salaId: string, datos: any},
        @ConnectedSocket()
            socket: Socket
    ){
        socket.join(message.salaId);
        const datosEnviar = message.datos as any
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoEnviarDatosJuego', datosEnviar)
        return 'ok'
    }

    @SubscribeMessage('enviarLetra')
    enviarLetra(
        @MessageBody()
            message: {salaId: string, letra: string},
        @ConnectedSocket()
            socket: Socket
    ){
        socket.join(message.salaId);
        const letra = message.letra as string
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoEnviarLetra', letra)
        return 'ok'
    }

    @SubscribeMessage('enviarPuntos')
    enviarPuntos(
        @MessageBody()
            message: {salaId: string, puntos: []},
        @ConnectedSocket()
            socket: Socket
    ){
        socket.join(message.salaId);
        const puntos = message.puntos as any
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoEnviarPuntos', puntos)
        return 'ok'
    }

}