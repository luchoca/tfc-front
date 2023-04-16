import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  precio: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', precio: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', precio: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', precio: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', precio: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', precio: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', precio: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', precio: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', precio: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', precio: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', precio: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-create-hambu',
  templateUrl: './create-hambu.component.html',
  styleUrls: ['./create-hambu.component.css'],
})
export class CreateHambuComponent {
  displayedColumns: string[] = ['position', 'name', 'precio', 'symbol'];
  dataSource = ELEMENT_DATA;
}
