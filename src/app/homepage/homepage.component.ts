import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CredentialsService } from '../credentials.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private UsersService : CredentialsService, private cookieService : CookieService, private router : Router) { }

  ngOnInit(): void {
  }
  userEmail=''
  checkLogin() {
    const data=this.UsersService.getData();
    for(const d of data){
      if(this.cookieService.check(d.email)){
        this.userEmail=d.email
        return true;
      }
    }
    return false;
  }
  onLogout(){
    this.cookieService.delete(this.userEmail)
    this.router.navigate(['login'])
  }
}
