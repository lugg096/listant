import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearListComponent } from './crear-list.component';

describe('CrearListComponent', () => {
  let component: CrearListComponent;
  let fixture: ComponentFixture<CrearListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
