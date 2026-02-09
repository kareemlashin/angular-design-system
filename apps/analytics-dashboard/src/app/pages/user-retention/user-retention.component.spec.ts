import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRetentionComponent } from './user-retention.component';

describe('UserRetentionComponent', () => {
  let component: UserRetentionComponent;
  let fixture: ComponentFixture<UserRetentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRetentionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserRetentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
