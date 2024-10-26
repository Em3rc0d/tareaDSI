import { Component, OnInit, OnDestroy } from '@angular/core';
import { RandomService } from '../../servicios/random.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-casita',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './casita.component.html',
  styleUrls: ['./casita.component.css'] // Asegúrate de que la ruta sea correcta
})
export class CasitaComponent implements OnInit, OnDestroy {
  usuario: any = null;
  spotifyResults: any[] = []; // Inicializa la lista de resultados de Spotify
  horoscope: string | null = null; // Variable para almacenar el horóscopo
  error: string | null = null; // Variable para manejar errores
  home: any;
  private userSubscription: Subscription | null = null;
  
  // Variable para controlar la visibilidad del menú
  isMenuOpen: boolean = false;

  constructor(
    private auth: AuthService
  ) {}

  ngOnInit(): void {

    this.userSubscription = this.auth.user$.subscribe(user => {
      if(user) {
        this.usuario = user;
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  logOut() {
    this.auth.logout();
  }

  // Método para alternar la visibilidad del menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
