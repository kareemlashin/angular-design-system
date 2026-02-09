import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoveryCodesComponent } from './recovery-codes.component';

describe('RecoveryCodesComponent', () => {
  let component: RecoveryCodesComponent;
  let fixture: ComponentFixture<RecoveryCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoveryCodesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecoveryCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
