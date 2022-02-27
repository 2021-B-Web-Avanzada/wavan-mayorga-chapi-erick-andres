"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventosGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let EventosGateway = class EventosGateway {
    unirseSala(message, socket) {
        socket.join(message.salaId);
        const data = {
            mensaje: message.nombre + ' se unió a la sala',
            usuario: message.nombre
        };
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoUnirseSala', data);
        return 'ok';
    }
    iniciarPartida(message, socket) {
        socket.join(message.salaId);
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoIniciarPartida');
        return 'ok';
    }
    enviarMensaje(message, socket) {
        socket.join(message.salaId);
        const nuevoMensaje = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
        };
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoMensajeSala', nuevoMensaje);
        return 'ok';
    }
    decirBasta(message, socket) {
        socket.join(message.salaId);
        const data = {
            mensaje: message.nombre + ' ha dicho Basta!',
            usuario: message.nombre
        };
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoDecirBasta', data);
        return 'ok';
    }
    abandonarSala(message, socket) {
        socket.join(message.salaId);
        const data = {
            mensaje: message.nombre + ' salió de la sala',
            usuario: message.nombre
        };
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoAbandonarSala', data);
        return 'ok';
    }
    enviarRespuestas(message, socket) {
        socket.join(message.salaId);
        const respuestasEnviar = message.respuestas;
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoEnviarRespuestas', respuestasEnviar);
        return 'ok';
    }
    enviarDatosJuego(message, socket) {
        socket.join(message.salaId);
        const datosEnviar = message.datos;
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoEnviarDatosJuego', datosEnviar);
        return 'ok';
    }
    enviarLetra(message, socket) {
        socket.join(message.salaId);
        const letra = message.letra;
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoEnviarLetra', letra);
        return 'ok';
    }
    enviarPuntos(message, socket) {
        socket.join(message.salaId);
        const puntos = message.puntos;
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoEnviarPuntos', puntos);
        return 'ok';
    }
};
__decorate([
    (0, websockets_1.SubscribeMessage)('unirseSala'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "unirseSala", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('iniciarPartida'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "iniciarPartida", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('enviarMensaje'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "enviarMensaje", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('decirBasta'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "decirBasta", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('abandonarSala'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "abandonarSala", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('enviarRespuestas'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "enviarRespuestas", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('enviarDatosJuego'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "enviarDatosJuego", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('enviarLetra'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "enviarLetra", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('enviarPuntos'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "enviarPuntos", null);
EventosGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(8080, {
        cors: {
            origin: '*',
        }
    })
], EventosGateway);
exports.EventosGateway = EventosGateway;
//# sourceMappingURL=eventos.gateway.js.map