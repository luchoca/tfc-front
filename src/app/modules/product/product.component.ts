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
      this.productsDto = products;
      //acá hay que comparar lo del localstorage que es lo que tiene el cli en el carrito
      // con los datos que obtenemos de la bd que están sin actualizar
      this.productsDto.sort((a, b) => a.nombre.localeCompare(b.nombre))
    });

    this.products_purchased = JSON.parse(
      localStorage.getItem('products_purchased') || '[{}]'
    );

  }

  openDialog(product: ProductDto): void {
    const dialogRef = this.dialog.open(ProductPurchasedComponent, {
      data: { product },
    });

    dialogRef.afterClosed().subscribe((result: ProductPurchasedDto) => {
      if (result != null) {
        result.product.stock = result.product.stock - result.quantity;
        if (localStorage.getItem('products_purchased') == null) {
          this.products_purchased = JSON.parse(JSON.stringify([result]));
        } else {
          this.products_purchased = JSON.parse(
            localStorage.getItem('products_purchased') || '[{}]'
          );

          this.products_purchased.forEach((p: ProductPurchasedDto, index: number) => {
            if (p.product._id === result.product._id) {
              result.quantity += p.quantity;
              this.products_purchased.splice(index, 1);
            }
          });
          this.products_purchased.push(result);
        }

        localStorage.setItem(
          'products_purchased',
          JSON.stringify(this.products_purchased)
        );

        this.productsDto = this.productsDto.filter((p) => p._id !== result.product._id)
        this.productsDto.push(result.product)
        this.productsDto.sort((a, b) => a.nombre.localeCompare(b.nombre))
      }
    });
  }
}
