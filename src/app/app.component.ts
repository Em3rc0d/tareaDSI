import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TimeService } from './../servicios/time.service';
import { RandomService } from './../servicios/random.service';
import { SpotifyService } from './../servicios/spotify.service'; // Importa el servicio Spotify

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet]
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  horaLocal: string = '';
  randomUser: any;
  spotifyResults: any[] = []; // Inicializa la lista de resultados de Spotify

  constructor(
    private formBuilder: FormBuilder,
    private timeService: TimeService,
    private randomService: RandomService,
    private spotifyService: SpotifyService // Inyecta el servicio Spotify
  ) {
    this.userForm = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['', Validators.required],
      departamento: ['']
    });
  }

  ngOnInit(): void {
    this.obtenerHoraLocal();
    this.obtenerUsuarioAleatorio();
    this.buscarSpotify('coldplay'); // Llama a la búsqueda de Spotify con "coldplay"
  }

  obtenerHoraLocal() {
    this.timeService.getHoraLocal().subscribe(
      data => {
        this.horaLocal = data.dateTime;
        console.log('Hora Local:', this.horaLocal);
      },
      error => {
        console.error('Error al obtener la hora:', error);
      }
    );
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

  buscarSpotify(query: string) {
    if (!query) {
      console.error('Se requiere un query para buscar en Spotify.');
      return;
    }
  
    this.spotifyService.search(query).subscribe(
      data => {
        console.log('Resultados de Spotify:', data); // Muestra la respuesta completa
        if (data.results) {
          this.spotifyResults = data.results; // Asigna resultados si existen
        } else {
          this.spotifyResults = []; // Asegúrate de inicializar en caso de que no existan resultados
        }
      },
      error => {
        console.error('Error al buscar en Spotify:', error);
        this.spotifyResults = []; // Inicializa a un arreglo vacío en caso de error
      }
    );
  }
  
  

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Formulario enviado:', this.userForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
