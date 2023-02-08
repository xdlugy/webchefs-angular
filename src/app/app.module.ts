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
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { RolesAndPermissionsComponent } from './roles-and-permissions/roles-and-permissions.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteButtonComponent,
    UserEditButtonWrapperComponent,
    BlockButtonComponent,
    PasswordButtonComponent,
    SaveButtonComponent,
    MenuComponent,
    UserListComponent,
    UserEditComponent,
    RolesAndPermissionsComponent,
    SettingsComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
