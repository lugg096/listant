import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController, IonContent } from '@ionic/angular';


@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.scss'],
})
export class SolicitarComponent implements OnInit {

  public msg: string;
  public chat: any;
  public room: any;
  public user: any;
  @ViewChild('scrollElement') content: IonContent;

  constructor(
    private _navParams: NavParams,
    private _modal: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this._modal.dismiss();
  }
}
