import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetachmentPage } from './detachment.page';

describe('DetachmentPage', () => {
  let component: DetachmentPage;
  let fixture: ComponentFixture<DetachmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetachmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetachmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
