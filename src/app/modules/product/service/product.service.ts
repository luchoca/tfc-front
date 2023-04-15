import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDto } from '../dto/product-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient: HttpClient) {
  }

  findProducts(): Observable<ProductDto[]>{
    return this._httpClient.get<ProductDto[]>(environment.apiBase + "productos/findAll");
  }

  findProductById(id:number): Observable<ProductDto>{
    return this._httpClient.get<ProductDto>(environment.apiBase + "product/findById" + id);
  }
}
