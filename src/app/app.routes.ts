import { Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HoroscopoComponent } from './horoscopo/horoscopo.component';
import { DivisasComponent } from './divisas/divisas.component';
import { HomeComponent } from './home/home.component';
import { TriviaComponent } from './trivia/trivia.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'horoscopo',
        component: HoroscopoComponent
    },
    {
        path: 'divisas',
        component: DivisasComponent
    },
    {
        path: 'trivia',
        component: TriviaComponent
    },
    {
        path: 'games',
        component: GameComponent
    }
];
