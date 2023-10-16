import { NestFactory } from '@nestjs/core';
import { LibraryModule } from './Library.module';

async function bootstrap() {
  const app = await NestFactory.create(LibraryModule);
  await app.listen(3000);
}
bootstrap();
