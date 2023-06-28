import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { KnownFilter } from '@config/filters/known.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalFilters(new KnownFilter())
	app.useGlobalPipes(new ValidationPipe({
		transform: true,
		whitelist: true,
		forbidNonWhitelisted: true,
	  }),
	  );
	app.enableCors();
	await app.listen(3000);
}
bootstrap();
