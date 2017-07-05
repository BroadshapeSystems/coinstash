import { NgModule, InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app_config');

export const APP_DI_CONFIG: AppConfig = {
    allWalletsUrl: 'http://localhost:5001/api/wallets/all'
}

export class AppConfig {
    allWalletsUrl: string;
}

@NgModule({
    providers: [{
        provide: APP_CONFIG,
        useValue: APP_DI_CONFIG
    }]
})
export class AppConfigModule { }
