import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets/interfaces";
import { Socket, Server } from "socket.io";

@WebSocketGateway(3006, { cors: true })
export class MessageGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() 
    server: Server;

    async handleConnection(client: Socket) {}

    async handleDisconnect(client: Socket) {}

    async afterInit(server: any) {
        
    }
}