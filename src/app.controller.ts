import { Injectable, Controller, Get } from '@nestjs/common';

@Controller()
@Injectable()
export class AppController {
  @Get('status')
  public async status() {
    return '{"status":"good"}';
  }
}
