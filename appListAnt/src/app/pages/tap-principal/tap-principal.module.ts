import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TapPrincipalPageRoutingModule } from './tap-principal-routing.module';

import { TapPrincipalPage } from './tap-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TapPrincipalPageRoutingModule
  ],
  declarations: [TapPrincipalPage]
})
export class TapPrincipalPageModule {}
