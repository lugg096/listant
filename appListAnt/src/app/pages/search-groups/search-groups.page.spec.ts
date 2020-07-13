import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchGroupsPage } from './search-groups.page';

describe('SearchGroupsPage', () => {
  let component: SearchGroupsPage;
  let fixture: ComponentFixture<SearchGroupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGroupsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchGroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
