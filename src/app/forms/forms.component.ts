import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TimeService } from '../../servicios/time.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {
  userForm: FormGroup;
  horaLocal: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private timeService: TimeService,
    
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
  
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Formulario enviado:', this.userForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
