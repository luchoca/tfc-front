import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductPurchasedDto } from 'src/app/modules/product-purchased/dto/product-purchased-dto';
import { DialogData } from 'src/app/modules/product/product.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-purchased',
  templateUrl: './product-purchased.component.html',
  styleUrls: ['./product-purchased.component.css'],
})
export class ProductPurchasedComponent {
  productPurchased!: ProductPurchasedDto;
  @Input() quantity!: number;

  constructor(
    public dialogRef: MatDialogRef<ProductPurchasedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    if (this.quantity != undefined) {
      if (this.quantity != 0) {
        if (this.quantity <= this.data.product.stock) {
          this.productPurchased = {
            quantity: this.quantity,
            product: this.data.product,
          };
          Swal.fire(
            'Producto agregado al carrito!',
            'El producto ' +
              this.data.product.nombre +
              ' fue agregado correctamente al carrito',
            'success'
          );
          this.dialogRef.close(this.productPurchased);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El stock es insuficiente',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Debe ingresar una cantidad correcta (mayor a 0)',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debe agregar una cantidad al producto que desea agregar al carrito',
      });
    }
  }
}
