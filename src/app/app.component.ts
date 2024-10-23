import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TimeService } from './../servicios/time.service';

import { SpotifyService } from './../servicios/spotify.service';
import { HoroscopeService } from '../servicios/horoscope.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RandomService } from '../servicios/random.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet]
})
export class AppComponent implements OnInit {
  randomUser: any;
  spotifyResults: any[] = []; // Inicializa la lista de resultados de Spotify
  horoscope: string | null = null; // Variable para almacenar el horóscopo
  error: string | null = null; // Variable para manejar errores

  constructor(
    private randomService: RandomService
    // private spotifyService: SpotifyService,
    // private horoscopeService: HoroscopeService
  ) {
    
  }

  ngOnInit(): void {
    this.obtenerUsuarioAleatorio();
    // this.buscarSpotify('coldplay'); // Llama a la búsqueda de Spotify con "coldplay"
    // this.getHoroscope('aries');
  }
  obtenerUsuarioAleatorio() {
    this.randomService.getRandomUser().subscribe(
      data => {
        console.log('Usuario aleatorio:', data);
        this.randomUser = data.results[0];
      },
      error => {
        console.error('Error al obtener el usuario aleatorio:', error);
      }
    );
  }

  // buscarSpotify(query: string) {
  //   if (!query) {
  //     console.error('Se requiere un query para buscar en Spotify.');
  //     return;
  //   }
  
  //   this.spotifyService.search(query).subscribe(
  //     data => {
  //       console.log('Resultados de Spotify:', data); // Muestra la respuesta completa
  //       if (data.results) {
  //         this.spotifyResults = data.results; // Asigna resultados si existen
  //       } else {
  //         this.spotifyResults = []; // Asegúrate de inicializar en caso de que no existan resultados
  //       }
  //     },
  //     error => {
  //       console.error('Error al buscar en Spotify:', error);
  //       this.spotifyResults = []; // Inicializa a un arreglo vacío en caso de error
  //     }
  //   );
  // }
  
  // getHoroscope(sign: string) {
  //   this.horoscopeService.getHoroscope(sign).subscribe(
  //     data => {
  //       this.horoscope = data.horoscope; // Ajusta según la estructura de la respuesta
  //       console.log('Horóscopo obtenido:', this.horoscope);
  //     },
  //     error => {
  //       console.error('Error al obtener el horóscopo:', error);
  //       this.error = 'No se pudo obtener el horóscopo. Intenta más tarde.';
  //     }
  //   );
  // }
  

}
