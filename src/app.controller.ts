import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/other')
  getOtherRouter(): string {
    return this.appService.getOtherThing();
  }

  @Get('/other/testing')
  getOtherCounter(): string {
    return this.appService.getCounter();
  }
}
