import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailDigestsComponent } from './email-digests.component';

describe('EmailDigestsComponent', () => {
  let component: EmailDigestsComponent;
  let fixture: ComponentFixture<EmailDigestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailDigestsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailDigestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
