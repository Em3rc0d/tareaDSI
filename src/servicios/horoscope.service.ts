import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopeService {
  private baseUrl = 'https://horoscopes-ai.p.rapidapi.com/get_horoscope';

  constructor(private http: HttpClient) {}

  getHoroscope(sign: string): Observable<any> {
    const url = `${this.baseUrl}/${sign}/tomorrow/general/es`;
    const headers = new HttpHeaders({
      'X-Rapidapi-Key': '7ec82321f8msh3f9148105eb8ed7p13aebejsn2dbca5bb8a1f',
      'X-Rapidapi-Host': 'horoscopes-ai.p.rapidapi.com'
    });

    return this.http.get<any>(url, { headers });
  }
}
