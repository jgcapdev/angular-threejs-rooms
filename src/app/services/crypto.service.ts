import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  }

  getMarkets() {
    return this.http.get(this.URI);
  }
}
