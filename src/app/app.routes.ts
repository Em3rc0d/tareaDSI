import { Routes } from '@angular/router';
import { CasitaComponent } from './casita/casita.component';
import { HomeComponent } from './home/home.component';
import { HoroscopoComponent } from './horoscopo/horoscopo.component';
import { DivisasComponent } from './divisas/divisas.component';
import { TriviaComponent } from './trivia/trivia.component';
import { GameComponent } from './game/game.component';
import { NationalityComponent } from './nationality/nationality.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { FormsComponent } from './forms/forms.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { IpInfoComponent } from './ip-info/ip-info.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'casita',
        component: CasitaComponent,
        children: [
            { path: 'home', component: HomeComponent },
            // { path: 'horoscopo', component: HoroscopoComponent },
            { path: 'divisas', component: DivisasComponent },
            { path: 'trivia', component: TriviaComponent },
            // { path: 'games', component: GameComponent },
            { path: 'nationality', component: NationalityComponent },
            { path: 'lyrics', component: LyricsComponent },
            { path: 'forms', component: FormsComponent },
            { path: 'ip-info', component: IpInfoComponent },
            // { path: 'posts', component: PostsComponent }
        ]
    },
    {
        path: '**',
        redirectTo: 'welcome',
        pathMatch: 'full'
    }
];
