import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {
  private apiUrl = 'https://api.nationalize.io'; // Cambia a tu API para obtener nacionalidades
  private countriesApiUrl = 'https://restcountries.com/v3.1/all'; // API para obtener las banderas

  constructor(private http: HttpClient) {}

  getNationalities(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?name=${name}`);
  }

  getCountries(): Observable<any> {
    return this.http.get<any>(this.countriesApiUrl);
  }
}
