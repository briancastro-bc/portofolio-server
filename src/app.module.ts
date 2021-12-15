import { Module } from "@nestjs/common";

import { AppController } from "@app/app.controller";
import { AppService } from "@app/app.service";

// Modules
import { AppConfigModule } from '@app/config/app/config.module';
import { AuthModule } from "@app/authentication/auth.module";

@Module({
	imports: [
		AppConfigModule,
		AuthModule
	],
	controllers: [AppController],
	providers: [
		AppService
	],
})
export class AppModule {}
