import { Component } from '@angular/core';
export interface IngredientesSchema {
  name: string;
  precio: number;
  symbol: string;
}
const VEGETALES_DATA: IngredientesSchema[] = [
  { name: 'Lechuga', precio: 10, symbol: 'H' },
  { name: 'Pepinillos', precio: 25, symbol: 'He' },
  { name: 'Cebolla', precio: 20, symbol: 'Li' },
  { name: 'Tomate', precio: 20, symbol: 'Be' },
  { name: 'Cibullete', precio: 10, symbol: 'B' },
];
const PROTEINA_DATA: IngredientesSchema[] = [
  { name: 'Carne', precio: 10, symbol: 'H' },
  { name: 'Pollo', precio: 25, symbol: 'He' },
  { name: 'Vegetariana', precio: 20, symbol: 'Li' },
];
const TOPICS_DATA: IngredientesSchema[] = [
  { name: 'Huevo', precio: 30, symbol: 'C' },
  { name: 'Queso', precio: 40, symbol: 'N' },
  { name: 'Panceta', precio: 30, symbol: 'O' },
];
const SALSAS_DATA: IngredientesSchema[] = [
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
  proteinas = PROTEINA_DATA;
  vegetales = VEGETALES_DATA;
  topics = TOPICS_DATA;
  salsas = SALSAS_DATA;
}
