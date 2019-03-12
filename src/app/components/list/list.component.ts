import { List } from './../../../models/list.model';
import { DreamsService } from 'src/services/dreams.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() terminado: boolean = true;
  @ViewChild(IonList) lista: IonList;

  constructor(
    public dreamService: DreamsService,
    private router: Router,
    public alertController: AlertController) { }

  ngOnInit() {}

  listSelected(list: List) {
    if (this.terminado === true ) {
      this.router.navigateByUrl(`/tabs/terminados/agregar/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/pendientes/agregar/${list.id}`);      
    }
   
  }

  deleteList(list: List){
    this.dreamService.deleteList(list);
  }

  async editNameList(list: List) {
    const alert = await this.alertController.create({
      header: 'Edit List!',
      inputs: [
        {
          name: "title",
          type: "text",
          value: list.title
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel!');
            this.lista.closeSlidingItems();
          }
        }, {
          text: 'Okay',
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            } else if ( data.title.length > 0) {
              list.title = data.title;
              this.dreamService.saveStorage();
              this.lista.closeSlidingItems();
            }
          }
        }
      ]
    });

    await alert.present();
  }


}
