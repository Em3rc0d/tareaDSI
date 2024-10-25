import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TimeService } from '../../servicios/time.service';
import { RandomService } from '../../servicios/random.service'; // Importa tu servicio aquí

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  userForm: FormGroup;
  horaLocal: string = '';
  users: any[] = []; // Inicializa el array de usuarios

  constructor(
    private formBuilder: FormBuilder,
    private timeService: TimeService,
    private randomService: RandomService // Agrega el servicio aquí
  ) {
    this.userForm = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      confirmarCorreo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerHoraLocal();
    this.cargarUsuarios(); // Llama a la función para cargar usuarios
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

  cargarUsuarios() {
    // Carga usuarios aleatorios al inicializar el componente
    this.randomService.getRandomUser().subscribe(response => {
      this.users.push(response.results[0]); // Agrega el usuario a la lista
      if (this.users.length < 3) { // Si hay menos de 3, sigue llamando a la API
        this.cargarUsuarios();
      }
    });
  }
  
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Formulario enviado:', this.userForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
