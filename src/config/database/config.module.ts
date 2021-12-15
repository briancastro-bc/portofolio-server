import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './config.service';
import configuration from './configuration';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({

        }),
    ],
    exports: [
        DatabaseConfigService
    ],
    providers: [
        DatabaseConfigService
    ]
})
export class DatabaseConfigModule {}