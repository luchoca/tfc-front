import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ProductPurchasedService } from 'src/app/modules/product-purchased/service/product-purchased.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isVisible = true;
  constructor(private service: ProductPurchasedService) {}

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;
  hidden = false;
  cantidadCarrito = 0;
  someMethod() {
    this.trigger.openMenu();
  }

  algo(): number {
    return (this.cantidadCarrito = this.service.devolvemeCantidadCarrito());
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
