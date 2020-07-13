import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListgroupPageRoutingModule } from './listgroup-routing.module';

import { ListgroupPage } from './listgroup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListgroupPageRoutingModule
  ],
  declarations: [ListgroupPage]
})
export class ListgroupPageModule {}
