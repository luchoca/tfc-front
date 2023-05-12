import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientDto } from '../dto/client-dto';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient, private auth: Auth) {}

  getUser(documentId: string): Observable<ClientDto> {
    return this.http.get<ClientDto>(
      environment.apiBase + 'client/findById/' + documentId
    );
  }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
    console.log('isLoggedIN....');
  }
  userData() {
    this.loginWithGoogle().then((response) => {
      const nombre = response.user.displayName;
      const foto = response.user.photoURL;
      const email = response.user.email;
      return [nombre, foto, email];
    });
  }

  logout() {
    return signOut(this.auth);
  }
}
