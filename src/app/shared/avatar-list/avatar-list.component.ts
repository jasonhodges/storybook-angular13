import { Component, OnInit } from '@angular/core';
import { AvatarData } from '../models/avatar-data.model';

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.scss']
})
export class AvatarListComponent implements OnInit {
  listItems: AvatarData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
