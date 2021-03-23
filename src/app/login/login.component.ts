import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CredentialsService } from '../credentials.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public user: CredentialsService, private router: Router,private cookieService : CookieService) {}

  private cookieValue=''

  ngOnInit(): void {
    
  }
  userLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onLogin() {
    console.log(this.userLoginForm.value);
    const data = this.user.getData(),
     email= this.userLoginForm.controls['email'].value,
     password=this.userLoginForm.controls['password'].value

    let res = 'Invalid Data';
    for (const user of data) {
      if (user.email === email) {
        res = user.password === password ? user.name : 'Invalid Data';
      }
    }
   
    if (res !== 'Invalid Data') {
      alert(`welcome ${res}`);
      this.goToItems();
    } else {
      alert('Please enter correct details');
    }
    console.log(res);
    // this.cookieService.set('User', this.userSignupForm.value);
    // this.cookieValue = this.cookieService.get('User');
    // this.cookieService.set(loginUser.username, JSON.stringify(userExist));
    // this.router.navigate(['/dashboard'])
  }

  goToItems() {
    debugger
    this.cookieService.set( 'email',this.userLoginForm.controls['email'].value,);
    // this.cookieValue = this.cookieService.get(this.userLoginForm.controls['email'].value);
    // alert(this.cookieValue)
    // this.router.navigateByUrl('/homepage');
  }
}
