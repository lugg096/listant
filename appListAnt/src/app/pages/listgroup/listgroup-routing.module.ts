import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListgroupPage } from './listgroup.page';

const routes: Routes = [
  {
    path: '',
    component: ListgroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListgroupPageRoutingModule {}
