import 'module-alias/register';

import { VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from "@app/app.module";

async function bootstrap() {
	const port: string|number = 4000;
	const app = await NestFactory.create<NestExpressApplication>(AppModule, {
		cors: {
			origin: ["http://localhost:4200"],
			methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
			allowedHeaders: "*",
			credentials: true,
		},
		bodyParser: true,
	});
	app.setGlobalPrefix("api", {
		exclude: [],
	});
	app.enableVersioning({
		type: VersioningType.URI,
	});
	const config = new DocumentBuilder()
		.setTitle('Portofolio Server')
		.setDescription('Building my own portofolio server')
		.setVersion('1.0.0')
		.addTag('portofolio')
		.addBearerAuth()
		.build();
	const document = SwaggerModule.createDocument(app, config, {
		ignoreGlobalPrefix: true
	});
	SwaggerModule.setup('swagger', app, document);
	await app.listen(port,
		() => console.log(`Server on port ${port}`)
	);
}

bootstrap()
	.catch((err: any) => console.error(err));