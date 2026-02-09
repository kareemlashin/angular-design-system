import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbTestsComponent } from './ab-tests.component';

describe('AbTestsComponent', () => {
  let component: AbTestsComponent;
  let fixture: ComponentFixture<AbTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbTestsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AbTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
