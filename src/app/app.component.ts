import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TimeService } from './../servicios/time.service'; // Importa el servicio

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet]
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  horaLocal: string = ''; // Variable para almacenar la hora local

  constructor(private formBuilder: FormBuilder, private timeService: TimeService) { // Inyecta el servicio
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
    this.obtenerHoraLocal(); // Llama al método para obtener la hora local al iniciar
  }

  obtenerHoraLocal() {
    this.timeService.getHoraLocal().subscribe(
      data => {
        this.horaLocal = data.dateTime; // Actualiza la variable con la hora local de Lima
        console.log('Hora Local:', this.horaLocal);
      },
      error => {
        console.error('Error al obtener la hora:', error);
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
