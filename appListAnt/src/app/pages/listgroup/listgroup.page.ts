import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.page.html',
  styleUrls: ['./listgroup.page.scss'],
})
export class ListgroupPage implements OnInit {

  constructor() { }
  public segmentSelect = 'pedidos';
  public ventas=[1,1,1,1,1,1]

  ngOnInit() {
  }

  segmentChanged(event) {
    console.log(event.detail.value);
    this.segmentSelect = event.detail.value;
  }

}
