import { ListItem } from "./../../models/list-item.model";
import { Component, OnInit } from "@angular/core";
import { DreamsService } from "src/services/dreams.service";
import { ActivatedRoute } from "@angular/router";
import { List } from "src/models";

@Component({
  selector: "app-agregar",
  templateUrl: "./agregar.page.html",
  styleUrls: ["./agregar.page.scss"]
})
export class AgregarPage implements OnInit {
  list: List;
  nombreItem: "";

  constructor(
    private dreamsService: DreamsService,
    private route: ActivatedRoute
  ) {
    const listId = this.route.snapshot.paramMap.get("listId");
    this.list = this.dreamsService.getList(listId);
  }

  ngOnInit() {}

  addItem() {
    if (this.nombreItem.length === 0) {
      return;
    }
    const newItem = new ListItem(this.nombreItem);
    this.list.items.push(newItem);

    this.nombreItem = "";
    this.dreamsService.saveStorage();
  }

  cambioCheck(item: ListItem) {
    const pendiente = this.list.items.filter(itemData => !itemData.completado)
      .length;

    if (pendiente === 0) {
      this.list.finishIn = new Date();
      this.list.terminada = true;
    } else {
      this.list.finishIn = null;
      this.list.terminada = false;
    }

    this.dreamsService.saveStorage();
    console.log(this.dreamsService.list);
  }

  deleteItem(i: number) {
    this.list.items.splice(i, 1);
    this.dreamsService.saveStorage();
  }
}
