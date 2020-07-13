import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SolicitarComponent } from 'src/app/components/solicitar/solicitar.component';

@Component({
  selector: 'app-search-groups',
  templateUrl: './search-groups.page.html',
  styleUrls: ['./search-groups.page.scss'],
})
export class SearchGroupsPage implements OnInit {

  constructor(private _modal: ModalController) { }
  public avatares = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1];
  ngOnInit() {
  }

  solicitarProducto(id) {
    this._modal.create({
      component: SolicitarComponent,
      componentProps: {
        idProducto: id
      }
    }).then((modal) => modal.present());
  }

}
