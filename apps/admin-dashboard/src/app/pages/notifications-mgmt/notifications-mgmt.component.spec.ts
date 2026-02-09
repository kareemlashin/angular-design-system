import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsMgmtComponent } from './notifications-mgmt.component';

describe('NotificationsMgmtComponent', () => {
  let component: NotificationsMgmtComponent;
  let fixture: ComponentFixture<NotificationsMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsMgmtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
