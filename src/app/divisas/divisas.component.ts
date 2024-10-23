import { Component, inject } from '@angular/core';
import { ExchangeRateService } from '../../servicios/exchange-rate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-divisas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent {
  exchangeRates: any[] = [];
  filter: string = '';
  amount: number = 1; // Default amount
  private exchangeRateService = inject(ExchangeRateService);

  ngOnInit(): void {
    this.exchangeRateService.getExchangeRates().subscribe(data => {
      this.exchangeRates = data; // Directly assign the received array
    });
  }

  filteredRates() {
    return this.exchangeRates.filter(rate => 
      rate.code.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  sortedFilteredRates() {
    const filtered = this.filteredRates();
    const order = [
      'PEN', 'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 
      'CNY', 'INR', 'BRL', 'ZAR', 'MXN', 'RUB', 'SGD', 'HKD'
    ];
    
    return filtered.sort((a, b) => {
      return order.indexOf(a.code) - order.indexOf(b.code);
    });
  }
}