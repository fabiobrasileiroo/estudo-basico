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

      ];
  /*
  anima: Animal[] = [
    { name: 'Teste', type: "sla", age: 10 },
    { name: 'Alguma coisa', type: "foi", age: 4 }

  ];
  */

  animalDetails = ''
  
  constructor(private listService: ListService) {
    this.getAnimals()  
  }
  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano`
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name)
    this.listService.remove(animal.id).subscribe()
  }
  getAnimals():void {
    this.listService.getAll().subscribe((animals)=>(this.animals = animals))
  }

};