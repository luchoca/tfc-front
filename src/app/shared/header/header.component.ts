import { Component, ViewChild } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ClientService } from 'src/app/modules/client/service/client.service';
import { ProductPurchasedService } from 'src/app/modules/product-purchased/service/product-purchased.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isVisible = true;
  showHeader!: boolean;

  constructor(
    private productPurchaseService: ProductPurchasedService,
    private clientService: ClientService,
    protected router: Router,
    private auth: Auth
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = event.url !== '/';
      }
    });
  }

  ngOnInit() {}

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;
  hidden = false;
  cantidadCarrito = 0;
  someMethod() {
    this.trigger.openMenu();
  }

  algo(): number {
    return (this.cantidadCarrito =
      this.productPurchaseService.devolvemeCantidadCarrito());
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  datosUsuario() {
    this.clientService.userData();
  }

  logOut() {
    return signOut(this.auth);
  }
}
