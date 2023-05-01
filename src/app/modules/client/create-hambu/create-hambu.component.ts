import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CreateHambuService } from './service/create-hambu.service';
import { IngredientesDto } from './dto/crear-hambu-dto';

// const VEGETALES_DATA: IngredientesDto[] = [
//   { name: 'Lechuga', precio: 10, stock: 'H' },
//   { name: 'Pepinillos', precio: 25, stock: 'He' },
//   { name: 'Cebolla', precio: 20, stock: 'Li' },
//   { name: 'Tomate', precio: 20, stock: 'Be' },
//   { name: 'Cibullete', precio: 10, stock: 'B' },
// ];
// const PROTEINA_DATA: IngredientesDto[] = [
//   { name: 'Carne', precio: 10, stock: 'H' },
//   { name: 'Pollo', precio: 25, stock: 'He' },
//   { name: 'Vegetariana', precio: 20, stock: 'Li' },
// ];
// const TOPICS_DATA: IngredientesDto[] = [
//   { name: 'Huevo', precio: 30, stock: 'C' },
//   { name: 'Queso', precio: 40, stock: 'N' },
//   { name: 'Panceta', precio: 30, stock: 'O' },
// ];
// const SALSAS_DATA: IngredientesDto[] = [
//   { name: 'Mayonesa', precio: 20, stock: 'F' },
//   { name: 'Mostaza', precio: 20, stock: 'Ne' },
// ];
@Component({
  selector: 'app-create-hambu',
  templateUrl: './create-hambu.component.html',
  styleUrls: ['./create-hambu.component.css'],
})
export class CreateHambuComponent {
  hambuPersonal: String[] = [];
  displayedColumns: string[] = ['nombre', 'stock', 'precio'];
  // proteinas = PROTEINA_DATA;
  // vegetales = VEGETALES_DATA;
  // topics = TOPICS_DATA;
  // salsas = SALSAS_DATA;
  isChecked = false;
  isCheckedSalsas = false;
  isCheckedTopics = false;
  isCheckedVegetales = false;
  ingredientesDto: IngredientesDto[];

  constructor(private _createHambuService: CreateHambuService) {
    this.ingredientesDto = [];
    this.cargarIngredientes();
  }
  cargarIngredientes() {
    this._createHambuService.findIngredientes().subscribe((ingre) => {
      console.log(ingre);
      this.ingredientesDto = ingre;
    });
  }

  onCheckboxChange(event: MatCheckboxChange) {
    if ((event.checked = true)) console.log(event);
  }

  //Pushea los check box que sean true
  pushearHambu() {
    if (
      (this.isChecked,
      this.isCheckedSalsas,
      this.isCheckedTopics,
      this.isCheckedVegetales === true)
    ) {
      this.hambuPersonal.push('algo');
      console.log('SE PUSHEA XQ HAY TRUE');
      console.log(this.hambuPersonal);
    }
  }
}
export { IngredientesDto };
