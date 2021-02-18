import { Injectable } from "@angular/core"
import { ListModel } from "../models/list.model"


@Injectable()
export class ListService {
    getLists(){
      return LISTS
    }

    getEvent(id:number):ListModel {
      return LISTS.find(list => list.id === id)
    }

    addList(formValues) {
      const nextId = Math.max.apply(null, LISTS.map(s => s.id)) + 1;
      let list:ListModel = {
        id: nextId,
        name: formValues['name'],
        numberOfProductsAlreadyBought : 0,
        totalNumberOfProducts : 0,
        products:  [],
      }
      LISTS.push(list)
    }

    deleteList(id) {
      let index = LISTS.findIndex(x => x.id === id)
      LISTS.splice(index, 1);
    }

    productIsBought(listName, product){
      let listIndex = LISTS.findIndex(list => list.name === listName)
      let productIndex = LISTS[listIndex].products.findIndex(prod => prod.id === product.id)
      product.alreadyBought = !product.alreadyBought
      if (product.alreadyBought) {
        LISTS[listIndex].numberOfProductsAlreadyBought = LISTS[listIndex].numberOfProductsAlreadyBought + 1
      }  else {
        LISTS[listIndex].numberOfProductsAlreadyBought = LISTS[listIndex].numberOfProductsAlreadyBought - 1 
      }
      LISTS[listIndex].products[productIndex] = product
    }
}

const LISTS: ListModel[] = [{
    id: 1,
    name: "Carrefour",
    numberOfProductsAlreadyBought: 1,
    totalNumberOfProducts: 3,
    products: [{
      id: 1,
      name: "Morcovi",
      quantity: 5,
      imageUrl: '',
      description: "De Romania",
      alreadyBought: true
    },
    {
      id: 2,
      name: "Rosii",
      quantity: 10,
      imageUrl: '',
      description: "Cherry",
      alreadyBought: false
    },
    {
      id: 3,
      name: "Ceapa",
      quantity: 3,
      imageUrl: '',
      description: "Rosie",
      alreadyBought: false
    }
  ]
  },
  {
    id: 2,
    name: "Kaufland",
    numberOfProductsAlreadyBought: 0,
    totalNumberOfProducts: 3,
    products: [
      {
        id: 1,
        name: "Pepene",
        quantity: 1,
        imageUrl: '',
        description: "Galben",
        alreadyBought: false
      },
      {
        id: 2,
        name: "Mere",
        quantity: 5,
        imageUrl: '',
        description: "Golden",
        alreadyBought: false
      },
      {
        id: 3,
        name: "Kiwi",
        quantity: 5,
        imageUrl: '',
        description: "",
        alreadyBought: false
      }
    ]
  },
  {
    id: 3,
    name: "Auchan",
    numberOfProductsAlreadyBought: 0,
    totalNumberOfProducts: 3,
    products: [
      {
        id: 1,
        name: "Orez",
        quantity: 1,
        imageUrl: '',
        description: "Bob lung",
        alreadyBought: false
      },
      {
        id: 2,
        name: "Faina",
        quantity: 1,
        imageUrl: '',
        description: "000",
        alreadyBought: false
      },
      {
        id: 3,
        name: "Paste",
        quantity: 1,
        imageUrl: '',
        description: "Pene Integrale",
        alreadyBought: false
      }
    ]
  }]