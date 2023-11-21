import { ApplicationConfig, importProvidersFrom  } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { RecipesService } from './services/recipes.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), RecipesService, importProvidersFrom(HttpClientModule)]
};
