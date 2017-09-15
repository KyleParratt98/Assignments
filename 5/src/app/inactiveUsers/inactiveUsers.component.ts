import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactiveUsers.component.html',
  styleUrls: ['./inactiveUsers.component.css']
})
export class InactiveUsersComponent implements OnInit {

  usersArr: string[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.usersArr = this.userService.inactiveUsersArr;
  }

  onSetActive(userId: number) {
    this.userService.onSetActive(userId);
  }
}
