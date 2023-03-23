import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductPurchasedDto } from '../dto/product-purchased-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductPurchasedService {
  displayedColumns: string[] = ['Nombre', 'Descripcion', 'Cantidad'];
  constructor(private http: HttpClient) { }

  getProductsPurchasedByClientId(documentId: string): Observable<ProductPurchasedDto[]>{
    return this.http.get<ProductPurchasedDto[]>(environment.apiBase + "purchase/getPurchasesByClientId/" + documentId);
  }
}
