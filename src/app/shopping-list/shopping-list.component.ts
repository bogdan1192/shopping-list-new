import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListModel } from '../core/models/list.model';
import { ListService } from '../core/services/list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
    lists:ListModel[]
    constructor(private router: Router, private listService: ListService) {
      
    }

    ngOnInit() {
      this.lists = this.listService.getLists()
    }

    addNewList(){
      this.router.navigate(['list/new'])
    }
  
    deleteList(id: number){
      if(confirm("Are you sure that you want to delete this list")){
        this.listService.deleteList(id);
      }      
    }
  }
  
