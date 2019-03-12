import { Component, OnInit } from '@angular/core';
import { DreamsService } from 'src/services/dreams.service';
import { List } from 'src/models';

@Component({
    selector: 'page-terminados',
    templateUrl: './terminados.page.html'
})
export class TerminadosPage implements OnInit {
    
    constructor(private dreamService: DreamsService) { }

    ngOnInit(): void { }

    listSelected(list:List){
        console.log(list);
    }
}
