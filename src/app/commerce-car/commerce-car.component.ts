import { Component, OnInit } from '@angular/core';
import { OurServicesService } from '../our-services.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-commerce-car',
  templateUrl: './commerce-car.component.html',
  styleUrls: ['./commerce-car.component.scss']
})
export class CommerceCarComponent implements OnInit {
  constructor(private _ToastrService:ToastrService,private _OurServicesService: OurServicesService) {
    if (localStorage.getItem('user') != null) {
      this.userData=JSON.parse(`${localStorage.getItem('user')}`)[0]
    }
  }
  myCar: any;
  book: boolean = false;
  userData: any;
  cars:any[]=[]
  ngOnInit(): void {
    this._OurServicesService.getCars().subscribe({
      next: (res) => {
        this.cars = res;
      }
    })
  }

  handleBook(e: MouseEvent) {
    e.preventDefault()
    this._ToastrService.success('Customer Service Will Contact You', 'Request Recived');
    this.book = false;
  }
  bookCar(car:any) {
    this.book = !this.book;
    this.myCar = car;
  }
}
