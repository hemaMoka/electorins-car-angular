import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OurServicesService } from '../our-services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _Router:Router , private _OurServicesService:OurServicesService){}



  login: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null , [Validators.required])
    })

    ngOnInit(): void {
    this._OurServicesService.getUser().subscribe({
      next: (res) => {
        this.users = res;
      }
    })
  }

    messageError: string = "";
 users: any[]=[];
   handleLogin(login: FormGroup) {
    const user = this.users.filter((e) => {
      return e.email == login.value.email && e.password == login.value.password;
    })

    if (user.length !== 0) {
      localStorage.setItem('user', JSON.stringify(user));
      this._OurServicesService.islogin.next(true);
      this._Router.navigate(['/home']);
    }
    else {
      this.messageError = "Email Or Password Is Not Valid";
    }
  }
}
