import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  constructor() {}

  data: any = [{}];

  getData() {
    // let res = 'Invalid Data';
    // for (const user of this.data) {
    //   if (user.email === email) {
    //     res = user.password === password ? user.name : 'Invalid Data';
    //   }
    // }
    // email: string, password: string
    return this.data;
  }

  setData(userData: userModel) {
    this.data.push(userData);
  }
}
type userModel = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  mobileno: string;
  bio: string;
};
