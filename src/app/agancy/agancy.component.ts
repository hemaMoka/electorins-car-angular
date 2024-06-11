import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OurServicesService } from '../our-services.service';
@Component({
  selector: 'app-agancy',
  templateUrl: './agancy.component.html',
  styleUrls: ['./agancy.component.scss']
})
export class AgancyComponent implements OnInit {
  constructor(private _ToastrService:ToastrService,private _OurServicesService: OurServicesService) {
       if (localStorage.getItem('user') != null) {
      this.userData=JSON.parse(`${localStorage.getItem('user')}`)[0]
    }
  }
  agancies: any[] = [];
  userData: any;
  myAgancy: any;
  book: boolean = false;
  ngOnInit(): void {
    this._OurServicesService.getAgancy().subscribe({
      next: (res) => {
        this.agancies = res;
      }
    })
  }

  bookAgancy(agancy: any) {
    this.book = true;
    this.myAgancy = agancy;
  }

  handleBook(e: MouseEvent) {
    e.preventDefault();
    this._ToastrService.success('Customer Service Will Contact You', 'Request Recived');
    this.book = false;
  }
}
