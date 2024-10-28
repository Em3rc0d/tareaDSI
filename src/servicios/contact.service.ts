import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Definición de la interfaz para el formulario de contacto
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'https://backend-tarea-dsi.vercel.app/contact'; // Cambia a la URL de tu servidor

  constructor(private http: HttpClient) {}

  sendContactForm(data: ContactForm): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, data, { headers }).pipe(
      catchError(error => {
        console.error('Error occurred while sending contact form:', error);
        return throwError(error); // Retorna el error para que pueda ser manejado en el componente
      })
    );
  }
}
