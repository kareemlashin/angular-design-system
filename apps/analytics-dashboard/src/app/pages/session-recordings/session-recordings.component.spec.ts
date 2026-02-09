import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionRecordingsComponent } from './session-recordings.component';

describe('SessionRecordingsComponent', () => {
  let component: SessionRecordingsComponent;
  let fixture: ComponentFixture<SessionRecordingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionRecordingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SessionRecordingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
