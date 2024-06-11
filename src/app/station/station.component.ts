import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OurServicesService } from '../our-services.service';
@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  constructor(private _ToastrService: ToastrService, private _OurServicesService: OurServicesService) {
        if (localStorage.getItem('user') != null) {
      this.userData=JSON.parse(`${localStorage.getItem('user')}`)[0]
    }
  }
  stations: any[]=[];
  userData: any;
  book: boolean = false;
  myStation: any;
  ngOnInit(): void {
    this._OurServicesService.getStations().subscribe({
      next: (res) => {
        this.stations = res;
        }
      })
  }

  bookStation(s: any) {
    this.book = true;
    this.myStation = s;
  }

  handleBook(e: MouseEvent) {
    e.preventDefault();
    this.book = false;
    this._ToastrService.success('Customer Service Will Contact You', 'Request Recived');
  }
}
