import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Guru!!!';
  }

  getPing(): string {
    return 'Pong!';
  }
}

