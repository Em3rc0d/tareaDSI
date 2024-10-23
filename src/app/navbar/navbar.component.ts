import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RandomService } from './../../servicios/random.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit{
  randomUser: any;
  constructor(
    private randomService: RandomService
  ){}
  ngOnInit(): void {
    this.obtenerUsuarioAleatorio();
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
  llenarFormulario() {
    // Lógica para llenar el formulario
    console.log("Llenando formulario...");
  }

  verHoroscopo() {
    // Lógica para ver el horóscopo
    console.log("Mostrando horóscopo...");
  }

  verCambioDivisas() {
    // Lógica para ver el cambio de divisas
    console.log("Mostrando cambio de divisas...");
  }
}
