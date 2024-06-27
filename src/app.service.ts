import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Buzo20!!!';
  }

  getPing(): string {
    return 'Pong!';
  }
}

