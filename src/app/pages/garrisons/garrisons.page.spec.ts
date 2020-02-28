import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GarrisonsPage } from './garrisons.page';

describe('GarrisonsPage', () => {
  let component: GarrisonsPage;
  let fixture: ComponentFixture<GarrisonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarrisonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GarrisonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
