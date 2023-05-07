import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ClientService } from '../modules/client/service/client.service';

@Injectable({
  providedIn: 'root',
})
export class RolesGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  constructor(private clientService: ClientService, private router: Router) {
    this.clientService.loginWithGoogle();
  }
}
