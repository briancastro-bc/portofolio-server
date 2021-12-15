import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AppConfigService } from './config.service';
import configuration from './configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                APP_NAME: Joi.string().default('server-portofolio'),
                APP_ENV: Joi.string()
                    .valid('development', 'production', 'test', 'provision')
                    .default('development'),
                APP_URL: Joi.string().default('http://localhost:4000'),
                APP_PORT: Joi.number().default(4000)
            }),
        }),
    ],
    exports: [
        ConfigService,
        AppConfigService
    ],
    providers: [
        ConfigService,
        AppConfigService
    ]
})
export class AppConfigModule {}
