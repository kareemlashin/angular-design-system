import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartAnalyticsComponent } from './cart-analytics.component';

describe('CartAnalyticsComponent', () => {
  let component: CartAnalyticsComponent;
  let fixture: ComponentFixture<CartAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartAnalyticsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
