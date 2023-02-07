import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteButtonComponent } from './user-edit-button-wrapper/delete-button/delete-button.component';
import { UserEditButtonWrapperComponent } from './user-edit-button-wrapper/user-edit-button-wrapper.component';
import { BlockButtonComponent } from './user-edit-button-wrapper/block-button/block-button.component';
import { PasswordButtonComponent } from './user-edit-button-wrapper/password-button/password-button.component';
import { SaveButtonComponent } from './user-edit-button-wrapper/save-button/save-button.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteButtonComponent,
    UserEditButtonWrapperComponent,
    BlockButtonComponent,
    PasswordButtonComponent,
    SaveButtonComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
