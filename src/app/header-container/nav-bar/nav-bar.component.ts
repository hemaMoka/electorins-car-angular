import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OurServicesService } from 'src/app/our-services.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private _Router:Router,private _OurServicesService: OurServicesService) {
    _OurServicesService.islogin.subscribe({
      next: () => {
        if (_OurServicesService.islogin.getValue() == false) {
          this.islogin = false;
        } else {
          this.islogin = true;
        }
      }
    })
  }

  islogin: boolean = false;
    logOut() {
      this._OurServicesService.islogin.next(false);
      this._Router.navigate(['/login'])
    localStorage.clear();
  }
}
