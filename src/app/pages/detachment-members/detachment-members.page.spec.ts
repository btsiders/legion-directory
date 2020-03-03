import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetachmentMembersPage } from './detachment-members.page';

describe('DetachmentMembersPage', () => {
  let component: DetachmentMembersPage;
  let fixture: ComponentFixture<DetachmentMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetachmentMembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetachmentMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
