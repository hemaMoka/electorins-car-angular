import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OurServicesService } from '../our-services.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _ToastrService:ToastrService,private _OurServicesService:OurServicesService ,private _Router:Router){}
  register: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[1 2 0 5][0-9]{8}$/)]),
    password: new FormControl(null , [Validators.required])
  })


  handleRegister(form: FormGroup) {
    this._OurServicesService.signUp(form.value).subscribe({
      next: (res) => {
        this._ToastrService.success("Register Confirm" , "success")
        this._Router.navigate(['/login'])
      }
    });
  }


}
