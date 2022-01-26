import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarListComponent } from './avatar-list/avatar-list.component';
import { PersonComponent } from './person/person.component';



@NgModule({
  declarations: [
    AvatarComponent,
    AvatarListComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule
  ]
})
export class SharedModule { }
