import { Pipe, PipeTransform } from '@angular/core';
import { List } from 'src/models';

@Pipe({
  name: 'filtercomplete',
  pure: false // Para que cuandose dispare el ciclo de detección de angular no importando qu sea en otro componente.
})
export class FiltercompletePipe implements PipeTransform {

  transform(list: List[], complete: boolean = true): List[] {

    return list.filter( listData => listData.terminada === complete);
  }
}
