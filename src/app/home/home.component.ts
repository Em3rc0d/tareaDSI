import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  explore() {
    const routes = ['casita/divisas',
      'casita/ip-info',
      'casita/trivia', 
      'casita/nationality', 
      'casita/lyrics'];
    const randomRoute = routes[Math.floor(Math.random() * routes.length)];
    this.router.navigate([randomRoute]);
  }
}

// { path: 'horoscopo', component: HoroscopoComponent },
// { path: 'divisas', component: DivisasComponent },
// { path: 'trivia', component: TriviaComponent },
// // { path: 'games', component: GameComponent },
// { path: 'nationality', component: NationalityComponent },
// { path: 'lyrics', component: LyricsComponent },
// { path: 'forms', component: FormsComponent },
// { path: 'ip-info', component: IpInfoComponent },
// { path: 'posts', component: PostsComponent }
