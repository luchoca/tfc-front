import { HttpClient } from '@angular/common/http';
import { Injectable, Input, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductPurchasedDto } from 'src/app/modules/product-purchased/dto/product-purchased-dto';
import { DialogData } from 'src/app/modules/product/product.component';
import { ProductPurchasedComponent } from '../product-purchased.component';
@Injectable({
  providedIn: 'root',
})
export class ProductPurchasedService {
  @Input() quantity!: number;
  productPurchased!: ProductPurchasedDto;
  displayedColumns: string[] = ['Nombre', 'Descripcion', 'Cantidad'];

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<ProductPurchasedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  getProductsPurchasedByClientId(
    documentId: string
  ): Observable<ProductPurchasedDto[]> {
    return this.http.get<ProductPurchasedDto[]>(
      environment.apiBase + 'purchase/getPurchasesByClientId/' + documentId
    );
  }

  devolvemeCantidadCarrito(): number {
    return 1;
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
