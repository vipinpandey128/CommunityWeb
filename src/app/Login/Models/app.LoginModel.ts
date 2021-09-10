export class LoginModel {
  public Username: string = "";
  public Password: string = "";
}

export interface LoginSuccessModel {
  userName: string;
  userType: number;
  token: string;
}
