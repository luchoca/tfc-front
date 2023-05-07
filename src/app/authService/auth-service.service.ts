import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private readonly isLoggedIn = new BehaviorSubject<boolean>(true);
  isAuthenticated$(): Observable<boolean> {
    console.log('esta loegado?', this.isLoggedIn);

    return this.isLoggedIn;
  }

  constructor() {}
}
