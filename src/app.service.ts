import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World, testing here to practice a bit I need get the ball rolling in give the all in the work!';
  }

  getOtherThing(): string {
    return 'other router here now'
  }
}
