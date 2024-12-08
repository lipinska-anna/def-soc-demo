import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataleakComponent } from './dataleak.component';

describe('DataleakComponent', () => {
  let component: DataleakComponent;
  let fixture: ComponentFixture<DataleakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataleakComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataleakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
