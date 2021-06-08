import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumbersComponent } from './phone-numbers.component';

describe('PhoneNumbersComponent', () => {
  let component: PhoneNumbersComponent;
  let fixture: ComponentFixture<PhoneNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
