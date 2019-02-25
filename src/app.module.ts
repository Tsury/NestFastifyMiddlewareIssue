import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { TempMiddleware } from './temp.middleware';

@Module({
  controllers: [AppController]
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(TempMiddleware).forRoutes('*');
  }
}
