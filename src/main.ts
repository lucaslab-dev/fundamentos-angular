import 'zone.js';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

import { APP_ROUTES } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideNoopAnimations(),
    provideRouter(APP_ROUTES),
  ],
}).catch(console.error);
