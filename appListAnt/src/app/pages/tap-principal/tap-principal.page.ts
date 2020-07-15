import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-tap-principal',
  templateUrl: './tap-principal.page.html',
  styleUrls: ['./tap-principal.page.scss'],
})
export class TapPrincipalPage implements OnInit {
  
  @ViewChild('myTabs') tabs: IonTabs;

  constructor(private menu: MenuController) { }

  public page='';

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


  ngOnInit() {
  }

  getSelectedTab(): void {
   
    this.page = this.tabs.getSelected();
    console.log('Mostrar',this.page);
    
}

}
