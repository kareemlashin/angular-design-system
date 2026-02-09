import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversionFunnelsComponent } from './conversion-funnels.component';

describe('ConversionFunnelsComponent', () => {
  let component: ConversionFunnelsComponent;
  let fixture: ComponentFixture<ConversionFunnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversionFunnelsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConversionFunnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
