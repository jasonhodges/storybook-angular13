import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarListComponent } from './shared/avatar-list/avatar-list.component';
import { AvatarComponent } from './shared/avatar/avatar.component';
import { PersonComponent } from './shared/person/person.component';

const routes: Routes = [
  {path: 'person_Joe-Sample', component: PersonComponent},
  {path: 'avatar-list', component: AvatarListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
