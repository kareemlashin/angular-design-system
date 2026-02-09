import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuteSettingsComponent } from './mute-settings.component';

describe('MuteSettingsComponent', () => {
  let component: MuteSettingsComponent;
  let fixture: ComponentFixture<MuteSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuteSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MuteSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
