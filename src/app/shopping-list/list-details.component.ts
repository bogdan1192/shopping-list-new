import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListModel } from '../core/models/list.model';
import { ListService } from '../core/services/list.service';

@Component({
  templateUrl: 'list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit{
  isChecked
  list:ListModel
  constructor(private listService: ListService, private route:ActivatedRoute, private router:Router) {

  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.list = this.listService.getEvent(+params['id'])    
    })
  }

  homePage(){
    this.router.navigate(['/list'])   
  }

  checkValue(product : ListModel){
    this.listService.productIsBought(this.list?.name, product)
 }

  addProduct() {

 }

}