import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { CustomAuthGuard } from './CustomAuthGuard.decorator';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);
  app.setGlobalPrefix('api/v1', { exclude: ['/'] });
  app.enableCors();
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new CustomAuthGuard(reflector));

  const config = new DocumentBuilder()
    .setTitle('LDC Tall Table Api')
    .setDescription('The Tall Table API description')
    .setVersion('0.1')
    // auth/swagger integration test
    // .addBearerAuth(
    //   {
    //     type: 'http',
    //     scheme: 'bearer',
    //     bearerFormat: 'JWT',
    //     name: 'JWT',
    //     description: 'Enter JWT token',
    //     in: 'header',
    //   },
    //   'JWT-auth', // Has to match apibearerauth()
    // )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
