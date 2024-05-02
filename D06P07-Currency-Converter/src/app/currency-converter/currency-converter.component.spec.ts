import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
  usdAmount: number;
  selectedCurrency: string;
  convertedAmount: number;

  constructor(private http: HttpClient) { }

  convert() {
    if (!this.usdAmount || !this.selectedCurrency) {
      return;
    }
    this.http.get(`https://api.exchangerate-api.com/v4/latest/USD`).subscribe((data: any) => {
      const conversionRate = data.rates[this.selectedCurrency];
      if (conversionRate) {
        this.convertedAmount = this.usdAmount * conversionRate;
      } else {
        this.convertedAmount = null;
      }
    });
  }
}
