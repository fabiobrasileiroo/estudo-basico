import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal'
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  animal?: Animal; 

  constructor(private listService: ListService,private route: ActivatedRoute) {
    this.getAnimal()
  }

  getAnimal() {
    const id = this.route.snapshot.paramMap.get("id")
  }
}
