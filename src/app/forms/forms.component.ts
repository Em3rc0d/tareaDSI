import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TimeService } from '../../servicios/time.service';
import { RandomService } from '../../servicios/random.service';
import { ContactService } from '../../servicios/contact.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class FormsComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  enviando: boolean = false;
  enviado: boolean = false;
  errorMensaje: string = ''; // Para mostrar mensajes de error
  horaLocal: string = '';
  users: any[] = [];
  private subscription: Subscription | null = null;
  private localDateTime!: Date;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private timeService: TimeService,
    private randomService: RandomService
  ) {
    this.userForm = this.formBuilder.group(
      {
        nombreCompleto: ['', Validators.required],
        correo: ['', [Validators.required, Validators.email]],
        confirmarCorreo: ['', Validators.required],
        telefono: ['', [Validators.pattern("^[0-9]*$")]],
        mensaje: ['', Validators.required]
      },
      { validators: this.emailMatchValidator } // Validación personalizada
    );
  }

  ngOnInit(): void {
    this.obtenerHoraLocal();
    this.cargarUsuarios();

    // Intervalo para avanzar el tiempo en el componente cada minuto
    this.subscription = interval(60000).subscribe(() => {
      if (this.localDateTime) {
        this.localDateTime.setSeconds(this.localDateTime.getSeconds() + 60);
        this.horaLocal = this.formatDate(this.localDateTime);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  obtenerHoraLocal(): void {
    this.timeService.getHoraLocal().subscribe(
      data => {
        this.localDateTime = new Date(data.dateTime);
        this.horaLocal = this.formatDate(this.localDateTime);
      },
      error => {
        console.error('Error al obtener la hora:', error);
      }
    );
  }

  cargarUsuarios(): void {
    this.randomService.getRandomUser().subscribe(response => {
      this.users.push(response.results[0]); // Agrega el usuario a la lista
      if (this.users.length < 3) {
        this.cargarUsuarios();
      }
    });
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-PE', {
      dateStyle: 'short',
      timeStyle: 'short'
    }).format(date);
  }

  emailMatchValidator(group: FormGroup) {
    const correo = group.get('correo')?.value;
    const confirmarCorreo = group.get('confirmarCorreo')?.value;
    return correo === confirmarCorreo ? null : { emailMismatch: true };
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.enviando = true;
      const formData = {
        name: this.userForm.value.nombreCompleto,
        email: this.userForm.value.correo,
        message: this.userForm.value.mensaje
      };

      this.contactService.sendContactForm(formData).subscribe({
        next: response => {
          this.enviado = true;
          this.errorMensaje = ''; // Limpiar mensaje de error
          this.userForm.reset();
          setTimeout(() => (this.enviado = false), 3000);
        },
        error: error => {
          console.error('Error al enviar el formulario:', error);
          this.errorMensaje = 'Ocurrió un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.';
          this.enviando = false;
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
