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
    const routes = ['casita/horoscopo', 'casita/divisas', 'casita/trivia', 'casita/nationality', 'casita/lyrics'];
    const randomRoute = routes[Math.floor(Math.random() * routes.length)];
    this.router.navigate([randomRoute]);
  }
}
