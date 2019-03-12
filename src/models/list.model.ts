import { ListItem } from './list-item.model';

export class List {
    id: number;
    title: string;
    createIn: Date;
    finishIn: Date;
    terminada: boolean;
    items: ListItem[];

    constructor(title:string){
        this.title = title;

        this.terminada = false;
        this.createIn = new Date();
        this.items = [];
        
        this.id = new Date().getTime();

    }
}