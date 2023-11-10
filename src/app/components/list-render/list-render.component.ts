import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal'

import { ListService } from 'src/app/services/list.service'
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[ ] = [
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 10},
    {name: "Frida", type: "Dog", age: 5},
    { name: "Bob", type: "horse", age: 1}
  ];
  /*
  anima: Animal[] = [
    { name: 'Teste', type: "sla", age: 10 },
    { name: 'Alguma coisa', type: "foi", age: 4 }

  ];
  */

  animalDetails = ''
  
  constructor(private listService: ListService) {
    
  }
  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano`
  }

  removeAnimal(animal: Animal) {
    console.log("Removendo animal..")
  }

};