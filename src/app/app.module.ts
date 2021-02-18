import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListService } from './core/services/list.service';
import { HeaderComponent } from './header/header.component';
import { EditProductComponent } from './product/edit-product.component';
import { AddListComponent } from './shopping-list/add-list.component';
import { ListDetailsComponent } from './shopping-list/list-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    AddListComponent,
    ListDetailsComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
