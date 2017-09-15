export class UserService {
  activeUsersArr = ['Adolf', 'Zack', 'Fred'];
  inactiveUsersArr = ['Neil', 'Thabo', 'Chris'];

  onSetInactive(userID: number) {
    this.inactiveUsersArr.push(this.activeUsersArr[userID]);
    this.activeUsersArr.splice(userID, 1);
  }

  onSetActive(userID: number) {
    this.activeUsersArr.push(this.inactiveUsersArr[userID]);
    this.inactiveUsersArr.splice(userID, 1);
  }
}
