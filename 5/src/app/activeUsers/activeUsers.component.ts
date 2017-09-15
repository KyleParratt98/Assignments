import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './activeUsers.component.html',
  styleUrls: ['./activeUsers.component.css']
})
export class ActiveUsersComponent implements OnInit {

  usersArr: string[];
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.usersArr = this.userService.activeUsersArr;
  }


  onSetInactive(userId: number) {
    this.userService.onSetInactive(userId);
  }
}
