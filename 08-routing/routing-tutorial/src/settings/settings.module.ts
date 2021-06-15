import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarSettingsComponent } from './avatar-settings/avatar-settings.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    AvatarSettingsComponent,
    AccountSettingsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
