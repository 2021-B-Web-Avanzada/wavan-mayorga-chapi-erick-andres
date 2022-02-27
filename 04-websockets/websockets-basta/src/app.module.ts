import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EventosGateway} from "./eventos/eventos.gateway";

@Module({
  imports: [EventosGateway],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
