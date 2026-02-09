import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailPrefsComponent } from './email-prefs.component';

describe('EmailPrefsComponent', () => {
  let component: EmailPrefsComponent;
  let fixture: ComponentFixture<EmailPrefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailPrefsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailPrefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
