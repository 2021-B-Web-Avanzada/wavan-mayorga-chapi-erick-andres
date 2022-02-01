import {WebSocketGateway} from "@nestjs/websockets";

@WebSocketGateway(8080,
    {
    cors: {
        origin: '*',
    },
    namespace: 'events'
})
export class EventosGateway{

}