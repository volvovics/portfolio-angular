
import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'main', component: MainPageComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: '',   redirectTo: '/info', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

