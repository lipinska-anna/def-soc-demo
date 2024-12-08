import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecurityExtraComponent } from './security-extra.component';

describe('SecurityExtraComponent', () => {
  let component: SecurityExtraComponent;
  let fixture: ComponentFixture<SecurityExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityExtraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
