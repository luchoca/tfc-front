import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientDto } from '../dto/client-dto';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getUser(documentId: string) : Observable<ClientDto>{
    return this.http.get<ClientDto>(environment.apiBase + "client/findById/" + documentId)
  }
}
