import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudienceDemographicsComponent } from './audience-demographics.component';

describe('AudienceDemographicsComponent', () => {
  let component: AudienceDemographicsComponent;
  let fixture: ComponentFixture<AudienceDemographicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudienceDemographicsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AudienceDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
