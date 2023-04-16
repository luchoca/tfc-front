import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  precio: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Lechuga', precio: 10, symbol: 'H' },
  { name: 'Pepinillos', precio: 25, symbol: 'He' },
  { name: 'Cebolla', precio: 20, symbol: 'Li' },
  { name: 'Tomate', precio: 20, symbol: 'Be' },
  { name: 'Cibullete', precio: 10, symbol: 'B' },
  { name: 'Huevo', precio: 30, symbol: 'C' },
  { name: 'Queso', precio: 40, symbol: 'N' },
  { name: 'Panceta', precio: 30, symbol: 'O' },
  { name: 'Mayonesa', precio: 20, symbol: 'F' },
  { name: 'Mostaza', precio: 20, symbol: 'Ne' },
];
@Component({
  selector: 'app-create-hambu',
  templateUrl: './create-hambu.component.html',
  styleUrls: ['./create-hambu.component.css'],
})
export class CreateHambuComponent {
  displayedColumns: string[] = ['name', 'precio', 'symbol'];
  dataSource = ELEMENT_DATA;
}
