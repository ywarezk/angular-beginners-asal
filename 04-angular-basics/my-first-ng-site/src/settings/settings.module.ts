import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings/user-settings.component';



@NgModule({
  declarations: [
    UserSettingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserSettingsComponent
  ]
})
export class SettingsModule { }
