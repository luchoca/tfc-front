import { Component, OnInit } from '@angular/core';
import { ProductDto } from './dto/product-dto';
import { ProductService } from './service/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductPurchasedDto } from '../product-purchased/dto/product-purchased-dto';
import { ProductPurchasedComponent } from '../product-purchased/product-purchased.component';

export interface DialogData {
  product: ProductDto;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productsDto: ProductDto[];
  products_purchased: ProductPurchasedDto[] = [];

  constructor(
    private _productService: ProductService,
    public dialog: MatDialog
  ) {
    this.productsDto = [];
  }

  ngOnInit(): void {
    this.cargarProd();
  }

  cargarProd() {
    this._productService.findProducts().subscribe((products) => {
      console.log(products);

      this.productsDto = products;
    });
  }

  openDialog(product: ProductDto): void {
    const dialogRef = this.dialog.open(ProductPurchasedComponent, {
      data: { product },
    });

    dialogRef.afterClosed().subscribe((result: ProductPurchasedDto) => {
      if (result != null) {
        if (localStorage.getItem('products_purchased') == null) {
          this.products_purchased = JSON.parse(JSON.stringify([result]));
        } else {
          this.products_purchased = JSON.parse(
            localStorage.getItem('products_purchased') || '[{}]'
          );
          this.products_purchased.push(result);
        }
        localStorage.setItem(
          'products_purchased',
          JSON.stringify(this.products_purchased)
        );
      }
    });
  }
}
