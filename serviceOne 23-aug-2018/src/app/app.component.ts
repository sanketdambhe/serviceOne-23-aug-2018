import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { DataService } from './service/dataService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild('name') namedata: ElementRef ;

  // myName = '';
  // oncall(name) {
  //   this.myName = this.namedata.nativeElement.value;
  // }
  Data: {foodName: string, foodPrice: number, foodType: string} [] ;



  constructor(private dataServ: DataService) {

  }

  ngOnInit() {
this.Data = this.dataServ.TempArr;
  }


}
