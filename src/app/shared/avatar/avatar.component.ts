import { Component, Input, OnInit } from '@angular/core';
import { AvatarData } from '../models/avatar-data.model';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  avatarData: AvatarData = {name: '', avatarImageSrc: ''};
  avatarImageAlt: string = '';

  @Input()
  set setAvatarData(data: AvatarData) {
    this.avatarData = data;
    this.avatarImageAlt = `${data?.name}'s avatar image`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
