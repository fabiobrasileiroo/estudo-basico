import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { first } from 'rxjs';
//import { ListService } from './services/list.service';
import { Directive } from '@angular/core';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {path: '', component: Directive},
  {path: 'list', component:ListRenderComponent},
  {path: 'list/:id', component: ItemDetailComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
