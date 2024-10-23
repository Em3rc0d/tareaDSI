import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  private apiUrl = 'https://opentdb.com/api.php?amount=14&category=15&difficulty=easy';

  constructor(private http: HttpClient) { }

  getTriviaQuestions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}