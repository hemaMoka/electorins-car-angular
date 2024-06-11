import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  constructor(private _ToastrService:ToastrService){}

  handleConatct( ) {
    this._ToastrService.success("Your Message Send" ,"Success")
  }

}
