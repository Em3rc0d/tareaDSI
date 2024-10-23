import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopeService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=265b73838e614472ad5886bda88a40a7';

  constructor(private http: HttpClient) { }

  getTopHeadlines(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
