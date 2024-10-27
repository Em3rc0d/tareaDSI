import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpGeoService {
  private apiUrl = 'http://ipwho.is';

  constructor(private http: HttpClient) {}

  // Método para obtener la información de la IP
  getGeoInfo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  getUserInfo( ip: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${ip}`);
  }
}
