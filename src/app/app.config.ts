import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(), 
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-gw3t1o22is7w2ptm.us.auth0.com',
      clientId: 'HrIgMLQDvtP1CcWQ3MvPBqX9YzSBOEyS',
      authorizationParams: {
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : "https://tarea-dsi.vercel.app",
      }
    })
  ]
};
