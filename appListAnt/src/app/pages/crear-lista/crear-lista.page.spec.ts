import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearListaPage } from './crear-lista.page';

describe('CrearListaPage', () => {
  let component: CrearListaPage;
  let fixture: ComponentFixture<CrearListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
