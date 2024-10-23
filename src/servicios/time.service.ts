import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private apiUrl = 'https://timeapi.io/api/Time/current/zone?timeZone=America/Lima';

  constructor(private http: HttpClient) {}

  // Método para obtener la hora local de Lima
  getHoraLocal(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
