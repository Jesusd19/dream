import { ComponentsModule } from './../components/components.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PendientesPage } from './pendientes.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: PendientesPage }])
  ],
  declarations: [PendientesPage]
})
export class PendientesPageModule {}