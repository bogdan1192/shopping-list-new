import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './product/edit-product.component';
import { AddListComponent } from './shopping-list/add-list.component';
import { ListDetailsComponent } from './shopping-list/list-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: 'list/new', component: AddListComponent },
  { path: 'list', component: ShoppingListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list/:id', component: ListDetailsComponent},
  { path: 'product/:id', component: EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
