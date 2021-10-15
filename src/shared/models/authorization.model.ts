export class AuthorizationModel {
  code: string;
  name: string;
  role: string;
  usercode: string;
  department: string;

  constructor(model: any = null) {
    if (model) {
      this.code = model.code;
      this.name = model.name;
      this.role = model.role;
      this.usercode = model.usercode;
      this.department = model.department;
    }
  }

  hasRole(role: string) {
    return this.role.includes(role);
  }
}
