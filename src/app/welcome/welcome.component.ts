import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}
  ngOnInit(): void {
      this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
        if(isAuthenticated) {
          this.router.navigate(['/casita/home']);
        }
      })
  }
  login() {
    this.auth.loginWithRedirect();
  }
}
