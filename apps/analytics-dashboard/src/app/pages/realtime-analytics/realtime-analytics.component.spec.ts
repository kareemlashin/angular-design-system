import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealtimeAnalyticsComponent } from './realtime-analytics.component';

describe('RealtimeAnalyticsComponent', () => {
  let component: RealtimeAnalyticsComponent;
  let fixture: ComponentFixture<RealtimeAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtimeAnalyticsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RealtimeAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
