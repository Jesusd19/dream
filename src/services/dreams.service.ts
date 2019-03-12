import { Injectable } from "@angular/core";
import { List } from "src/models";

@Injectable()
export class DreamsService {
  list: List[] = [];

  constructor() {
    this.loadStorage();
  }

  createList(title: string) {
    const newList = new List(title);
    this.list.push(newList);
    this.saveStorage();

    return newList.id;
  }

  getList(id: string | number){
    id = Number(id);
    return this.list.find( listData => listData.id === id );
  }

  deleteList(list: List) {
    this.list = this.list.filter(listData => listData.id !== list.id);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.list))
  }

  loadStorage() {
   if ( localStorage.getItem('data')) {
    this.list = JSON.parse(localStorage.getItem('data'));
   } else {
     this.list = [];     
   }
    
  }
}
