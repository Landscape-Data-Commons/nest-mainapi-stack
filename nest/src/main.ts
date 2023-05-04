import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);
  app.setGlobalPrefix('api/v1', { exclude: ['/'] });
  app.enableCors();
  // const reflector = app.get(Reflector);
  // app.useGlobalGuards(new CustomAuthGuard(reflector));

  const config = new DocumentBuilder()
    .setTitle('LDC Tall Table Api')
    .setDescription('The Tall Table API description')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
