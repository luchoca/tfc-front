import { Component, OnInit } from '@angular/core';
import { ProductPurchasedDto } from 'src/app/modules/product-purchased/dto/product-purchased-dto';
import { ProductPurchasedService } from 'src/app/modules/product-purchased/service/product-purchased.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss'],
})
export class PurchaseHistoryComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Descripcion', 'Cantidad'];
  constructor(private _productPurchasedService: ProductPurchasedService) {}
  products_purchased: ProductPurchasedDto[] = [];
  ngOnInit(): void {
    this._productPurchasedService
      .getProductsPurchasedByClientId('48485074')
      .subscribe((products: ProductPurchasedDto[]) => {
        this.products_purchased = products;
      });
  }
}
