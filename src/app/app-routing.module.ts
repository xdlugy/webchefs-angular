import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { RolesAndPermissionsComponent } from './roles-and-permissions/roles-and-permissions.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path: 'statistics', component: StatisticsComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-edit', component: UserEditComponent},
  {path: 'roles-and-permissions', component: RolesAndPermissionsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', redirectTo: '/user-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
