import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  private apiUrl = 'https://randomuser.me/api/'; // URL de la API

  constructor(private http: HttpClient) {}

  // Método para obtener un usuario aleatorio
  getRandomUser(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
}
