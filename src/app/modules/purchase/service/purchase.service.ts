import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductPurchasedDto } from 'src/app/modules/product-purchased/dto/product-purchased-dto';
import { environment } from 'src/environments/environment';
import { PurchaseDto } from '../dto/purchase-dto';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  constructor(private http: HttpClient) {}

  get(): ProductPurchasedDto[] {
    return JSON.parse(localStorage.getItem('products_purchased') || '[{}]');
  }

  createPurchase(purchase: PurchaseDto): Observable<PurchaseDto> {
    return this.http.post<PurchaseDto>(
      environment.apiBase + 'carrito/create',
      purchase
    );
  }
}
