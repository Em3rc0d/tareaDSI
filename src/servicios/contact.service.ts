import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'https://localhost:3000/contact'; // Cambia a la URL de tu servidor

  constructor(private http: HttpClient) {}

  sendContactForm(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, data, { headers });
  }
}

