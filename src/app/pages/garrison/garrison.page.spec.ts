import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GarrisonPage } from './garrison.page';

describe('GarrisonPage', () => {
  let component: GarrisonPage;
  let fixture: ComponentFixture<GarrisonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarrisonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GarrisonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
