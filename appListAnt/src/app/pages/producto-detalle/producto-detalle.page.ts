import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular'
import { SolicitarComponent } from 'src/app/components/solicitar/solicitar.component';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.page.html',
  styleUrls: ['./producto-detalle.page.scss'],
})
export class ProductoDetallePage implements OnInit {

  constructor(private _modal: ModalController) { }
  public idProducto;
  public  productosRecomend=[1,1,1,1,1];
  public  producto=[1,1,1,1,1];

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 1,
    speed: 400
  };

  ngOnInit() {}

  solicitarProducto(id) {
    this._modal.create({
      component: SolicitarComponent,
      componentProps: {
        idProducto: id
      }
    }).then((modal) => modal.present());
  }

}
