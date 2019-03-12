import { Component, OnInit } from "@angular/core";
import { DreamsService } from "src/services/dreams.service";
import { List } from "src/models";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "page-pendientes",
  templateUrl: "./pendiente.page.html"
})
export class PendientesPage implements OnInit {
  constructor(
    private dreamService: DreamsService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit(): void {}


  async addList() {
    // 
    const alert = await this.alertController.create({
      header: "New List",
      inputs: [
        {
          name: "title",
          type: "text",
          placeholder: "List name"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel");
          }
        },
        {
          text: "Create",
          handler: data => {
            if (data.title.length === 0) {
              return;
            } else if ( data.title.length > 0) {
               const listId =  this.dreamService.createList(data.title);   
                
                this.router.navigateByUrl(`/tabs/pendientes/agregar/${listId}`);
            }
          }
        }
      ]
    });

    alert.present();   
 
  }
}
