import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG, HAMMER_LOADER } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireAnalyticsModule,
  UserTrackingService,
  ScreenTrackingService,
  DEBUG_MODE as ANALYTICS_DEBUG_MODE,
} from '@angular/fire/analytics';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFirestoreModule, SETTINGS as FIRESTORE_SETTINGS } from '@angular/fire/firestore';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireFunctionsModule, ORIGIN as FUNCTIONS_ORIGIN } from '@angular/fire/functions';
import { AngularFireRemoteConfigModule, SETTINGS as REMOTE_CONFIG_SETTINGS } from '@angular/fire/remote-config';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LottieModule } from 'ngx-lottie';
import { FormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import * as Sentry from '@sentry/angular';
import { AppHammerConfig } from './app-hammer-config';
import { ComponentsModule } from './_components/components.module';

export function playerFactory() {
  return import('lottie-web');
}

const shouldUseEmulator = () => false;

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirePerformanceModule,
    AngularFireStorageModule,
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence({ synchronizeTabs: true }),
    AngularFireMessagingModule,
    AngularFireFunctionsModule,
    AngularFireRemoteConfigModule,
    AngularFirePerformanceModule,
    AngularFireAuthGuardModule,
    FormsModule,
    HammerModule,
    LottieModule.forRoot({
      player: playerFactory,
      useCache: true,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.serviceWorker,
      registrationStrategy: 'registerImmediately',
    }),

    RouterModule,
    BrowserAnimationsModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    MatSidenavModule,
    ComponentsModule,
  ],
  providers: [
    {
      provide: HAMMER_LOADER,
      useValue: async () => {
        return import('hammerjs/hammer');
      },
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: AppHammerConfig,
    },
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
    UserTrackingService,
    ScreenTrackingService,
    // { provide: ANALYTICS_DEBUG_MODE, useFactory: () => isDevMode() },
    // {
    //   provide: FIRESTORE_SETTINGS,
    //   useFactory: () => (shouldUseEmulator() ? { host: 'localhost:8080', ssl: false } : {}),
    // },
    // { provide: FUNCTIONS_ORIGIN, useFactory: () => (shouldUseEmulator() ? 'http://localhost:9999' : undefined) },
    // { provide: REMOTE_CONFIG_SETTINGS, useFactory: () => (isDevMode() ? { minimumFetchIntervalMillis: 10_000 } : {}) },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
