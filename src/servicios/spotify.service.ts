import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private baseUrl: string = 'https://spotify23.p.rapidapi.com/search/';

  constructor(private http: HttpClient) {}

  search(query: string, type: string = 'multi', offset: number = 0, limit: number = 10): Observable<any> {
    const headers = new HttpHeaders({
      'X-Rapidapi-Key': '7ec82321f8msh3f9148105eb8ed7p13aebejsn2dbca5bb8a1f',
      'X-Rapidapi-Host': 'spotify23.p.rapidapi.com'
    });

    const params = {
      q: query, // Asegúrate de incluir el parámetro q
      type,
      offset: offset.toString(),
      limit: limit.toString(),
      numberOfTopResults: '5'
    };

    return this.http.get<any>(`${this.baseUrl}`, { headers, params });
  }
}
