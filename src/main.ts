import { NestFactory, FastifyAdapter } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const fastify = new FastifyAdapter();
  const app = await NestFactory.create(AppModule, fastify);
  await app.listen(3000);
};

bootstrap().then().catch();
