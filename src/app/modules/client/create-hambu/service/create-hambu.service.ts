import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IngredientesDto } from '../create-hambu.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateHambuService {
  constructor(private _httpClient: HttpClient) {}

  findIngredientes(): Observable<IngredientesDto[]> {
    return this._httpClient.get<IngredientesDto[]>(
      environment.apiBase + 'ingrediente/findAll'
    );
  }

  findPIngredientesById(id: number): Observable<IngredientesDto> {
    return this._httpClient.get<IngredientesDto>(
      environment.apiBase + 'ingrediente/findById' + id
    );
  }
}
