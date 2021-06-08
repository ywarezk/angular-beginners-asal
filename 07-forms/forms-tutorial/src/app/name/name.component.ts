import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-name',
  template: `
    <form [formGroup]="nameForm" (ngSubmit)="doSomethingWithName()">
      <label>Name</label>
      <input
        type="text"
        name="nameOfUser"
        formControlName="nameOfUser"
      />
      <div *ngIf="nameForm.controls['nameOfUser'].errors?.required">
        This field is required
      </div>
      <button type="submit" [disabled]="nameForm.invalid">
        Submit
      </button>
    </form>
  `,
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  nameForm = new FormGroup({
    nameOfUser: new FormControl('yariv', [
      Validators.required, Validators.minLength(3)
    ])
  })

  constructor() { }

  ngOnInit(): void {
  }

  doSomethingWithName() {
    console.log(this.nameForm.value);
    console.log(this.nameForm.controls['nameOfUser'].errors);
  }

}
