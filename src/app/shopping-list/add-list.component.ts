import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../core/services/list.service';

@Component({
  templateUrl: 'add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent{
  newList
  constructor(private router: Router, private listService:ListService){

  }
  addList(formValues){
    this.listService.addList(formValues)
    console.log(formValues)
    this.router.navigate(['/list'])
  }

  cancel(){
    this.router.navigate(['/list'])   
  }
}