/**

Routing configuration for the settings page

 */

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { AvatarSettingsComponent } from "./avatar-settings/avatar-settings.component";
import { SettingsComponent } from "./settings/settings.component";

 // routes for the settings page
 @NgModule({
   imports: [
     RouterModule.forChild([

       // /settings
       {
         path: '',
         component: SettingsComponent,
         children: [
           {
             path: 'account',
             component: AccountSettingsComponent
           },
           {
             path: 'avatar',
             component: AvatarSettingsComponent
           }
         ]
       }


     ])
   ],
   exports: [
     RouterModule
   ]
 })
 export class SettingsRoutingModule {}
