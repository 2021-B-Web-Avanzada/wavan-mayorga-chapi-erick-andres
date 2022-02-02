import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Socket, Server} from "socket.io";

@WebSocketGateway(8080,
    {
    cors: {
        origin: '*',
    },
    namespace: 'events'
})
export class EventosGateway{
    @SubscribeMessage('hola')
    devolverHola(
        @MessageBody()
        message,
        @ConnectedSocket()
        socket: Socket
    ){
        console.log(socket)
        console.log(socket.id)
        return {
            message,
            saludo: 'Hola'
        }
    }



}