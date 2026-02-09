import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorFlowComponent } from './behavior-flow.component';

describe('BehaviorFlowComponent', () => {
  let component: BehaviorFlowComponent;
  let fixture: ComponentFixture<BehaviorFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorFlowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BehaviorFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
