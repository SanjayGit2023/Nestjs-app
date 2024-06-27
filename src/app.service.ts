import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Buzo21!!!';
  }

  getPing(): string {
    return 'Pong!';
  }
}

