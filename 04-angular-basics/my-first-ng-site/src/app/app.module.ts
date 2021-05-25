import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SettingsModule } from 'src/settings/settings.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TodoModule } from 'src/todo/todo.module';
import { LogDirective } from './log.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogDirective
  ],
  imports: [
    BrowserModule,
    SettingsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
