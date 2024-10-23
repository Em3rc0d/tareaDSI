import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/8d7eefc596d96aa6a2e7f2f9/latest/PEN';

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => 
        Object.entries(response.conversion_rates).map(([code, value]) => ({ code, value }))
      )
    );
  }
}
