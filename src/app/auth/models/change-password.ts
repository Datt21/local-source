export class ChangePassword {
  constructor() {
    this.username = localStorage.getItem('userName');
  }
  username: string;
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
