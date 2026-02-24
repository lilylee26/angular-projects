import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideHttpClient(withInterceptorsFromDi()), //ME DA UNA configuracion para ser cliente http
    importProvidersFrom(FormsModule)//me ayuda a poder usar formularios html y en especial la directiva ngModel

  ]
};
