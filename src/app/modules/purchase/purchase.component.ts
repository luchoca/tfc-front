import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientDto } from '../client/dto/client-dto';
import { ClientService } from '../client/service/client.service';
import { ProductPurchasedDto } from '../product-purchased/dto/product-purchased-dto';
import { ProductDto } from '../product/dto/product-dto';
import { PurchaseDto } from './dto/purchase-dto';
import { PurchaseService } from './service/purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
})
export class PurchaseComponent implements OnInit {
  products_purchased: ProductPurchasedDto[] = [];
  stringCarrito: string = '';
  displayedColumns: string[] = [
    'Nombre',
    'Descripcion',
    'Cantidad',
    'Acciones',
  ];
  client: ClientDto | undefined;
  constructor(
    private _purchaseService: PurchaseService,
    private _clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.products_purchased = this._purchaseService.get();
    console.log('PRODUCTOS COMPRADOS:', this.products_purchased);
    this.products_purchased.forEach((p) => {
      this.stringCarrito += ' ' + p.product.nombre + '';
    });
  }

  deleteProduct(tableId: number) {
    Swal.fire({
      title: '¿Estás seguro que desea eliminarlo?',
      text: 'No se podrá revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then((result: any) => {
      if (result.isConfirmed) {
        let encontrado: boolean = false;
        for (let [key] of Object.entries(this.products_purchased)) {
          if (tableId == Number(key)) {
            console.log(key);
            console.log(tableId);
            this.products_purchased.splice(tableId, 1);
            console.log(this.products_purchased);
            encontrado = true;
            Swal.fire(
              'Eliminado!',
              'El producto ha sido eliminado correctamente del carrito.',
              'success'
            );
          }
        }
        if (encontrado == false) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ha ocurrido un error!',
          });
        }
        localStorage.setItem(
          'products_purchased',
          JSON.stringify(this.products_purchased)
        );
        this.products_purchased = JSON.parse(
          localStorage.getItem('products_purchased') || '[{}]'
        );
      }
    });
  }
  purchase() {
    Swal.fire({
      title: '¿Estás seguro que desea comprar' + this.stringCarrito + '?',
      text: 'No se podrá revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar compra',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this._clientService
          .getUser('48485074')
          .subscribe((client: ClientDto) => {
            let products: ProductDto[] = this.products_purchased.map(
              (p: ProductPurchasedDto) => p.product
            );

            let purchase: PurchaseDto = {
              idUsuario: client,
              productsPurchased: this.products_purchased,
              products: products,
            };
            this._purchaseService
              .createPurchase(purchase)
              .subscribe((purchase: PurchaseDto) => {
                if (purchase != null) {
                  Swal.fire(
                    'Exito!',
                    'Su compra ha sido realizada correctamente.',
                    'success'
                  );
                  localStorage.setItem('products_purchased', '[]');
                  this.products_purchased = this._purchaseService.get();
                } else {
                  Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ha ocurrido un error!',
                  });
                }
              });
          });
      }
    });
  }
}
