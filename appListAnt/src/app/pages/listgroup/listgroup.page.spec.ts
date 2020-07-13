import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListgroupPage } from './listgroup.page';

describe('ListgroupPage', () => {
  let component: ListgroupPage;
  let fixture: ComponentFixture<ListgroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListgroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListgroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
