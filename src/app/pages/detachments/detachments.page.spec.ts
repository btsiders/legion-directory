import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetachmentsPage } from './detachments.page';

describe('DetachmentsPage', () => {
  let component: DetachmentsPage;
  let fixture: ComponentFixture<DetachmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetachmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetachmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
