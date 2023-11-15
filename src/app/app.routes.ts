
import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { TransitionsComponent } from './components/transitions/transitions.component';

export const routes: Routes = [
    { path: 'main', component: MainPageComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'animations', component: AnimationsComponent },
    { path: 'transitions', component: TransitionsComponent },
    { path: '',   redirectTo: '/main', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

