import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-phone-numbers',
  template: `
    <form [formGroup]="phoneForm" (ngSubmit)="printValues()">
      <div formArrayName="phoneNumbers">
        <div
          *ngFor="let phoneGroup of $any(phoneForm.controls.phoneNumbers).controls"
          [formGroup]="phoneGroup">
          <input placeholder="prefix" type="text" name="prefix" formControlName="prefix" />
          <input placeholder="number" type="text" name="mainNumber" formControlName="mainNumber" />
        </div>

      </div>

      <button (click)="addAnotherPhone()">
        + Add more numbers
      </button>
      <button>
        Submit
      </button>
    </form>
  `,
  styleUrls: ['./phone-numbers.component.css']
})
export class PhoneNumbersComponent implements OnInit {

  /*
  group
    - array
      - group
        - prefix
        - mainNumber


  {
    [
      {
        prefix:
        mainNumber
      }
    ]
  }
  */

  phoneForm = this._formBuilder.group({
    phoneNumbers: this._formBuilder.array([
      this._formBuilder.group({
        prefix: '',
        mainNumber: ''
      })
    ])
  })

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  addAnotherPhone() {
    (this.phoneForm.controls['phoneNumbers'] as FormArray).push(
      this._formBuilder.group({
        prefix: '',
        mainNumber: ''
      })
    )
  }

  printValues() {
    console.log(this.phoneForm.value);
  }

}
