import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.page.html',
  styleUrls: ['./listuser.page.scss'],
})
export class ListuserPage implements OnInit {

  constructor() { }

  public Users=[1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  ngOnInit() {
  }

}
