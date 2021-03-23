import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CredentialsService } from '../credentials.service';
import { ConfirmedValidator } from './checkMatch';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  submitted = false;
  userSignupForm: FormGroup = new FormGroup({});
  cookieValue = '';
  ngOnInit(): void {}

  constructor(
    private fb: FormBuilder,
    public user: CredentialsService,
    private cookieService: CookieService
  ) {
    this.userSignupForm = fb.group(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        mobile: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
        ]),
        bio: new FormControl('', [Validators.required]),
      },
      {
        validator: ConfirmedValidator('password', 'confirmPassword'),
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.user.setData(this.userSignupForm.value);
    console.log(this.userSignupForm.value);
    this.onReset();
    alert('User Registered');
  }

  onReset() {
    this.submitted = false;
    this.userSignupForm.reset();
  }

  get f() {
    return this.userSignupForm.controls;
  }
}
