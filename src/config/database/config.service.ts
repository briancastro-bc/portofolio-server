import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {

    constructor(private configService: ConfigService) {}

    get type(): string {
        return this.configService.get<string>('database.type');
    }

    get port(): number {
        return this.configService.get<number>('database.port');
    }

    get host(): string {
        return this.configService.get<string>('database.host');
    }

    get database(): string {
        return this.configService.get<string>('database.database');
    }

}