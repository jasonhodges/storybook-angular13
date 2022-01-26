import { Component, OnInit } from '@angular/core';
import { AvatarData } from '../models/avatar-data.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  personAvatarData: AvatarData;

  constructor() {
    this.personAvatarData = {
      name: 'Joe Sample',
      avatarImageSrc: 'assets/joe-sample.png'
    }
  }

  ngOnInit(): void {
  }

}
