import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.page.html',
  styleUrls: ['./producto-detalle.page.scss'],
})
export class ProductoDetallePage implements OnInit {

  constructor() { }
  public  productosRecomend=[1,1,1,1,1];
  public  producto=[1,1,1,1,1];
  slideOpts = {
    initialSlide: 1,
    slidesPerView: 1,
    speed: 400
  };


 
  ngOnInit() {
  }

}
