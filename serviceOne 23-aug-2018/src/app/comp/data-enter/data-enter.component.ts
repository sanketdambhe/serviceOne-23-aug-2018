import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/dataService.service';

@Component({
  selector: 'app-data-enter',
  templateUrl: './data-enter.component.html',
  styleUrls: ['./data-enter.component.css']
})
export class DataEnterComponent implements OnInit {
name;
price;
option;

options = ['food', 'vegitable' ];

  constructor(private datServ: DataService) { }

  ngOnInit() {
  }

  onAddItem() {
 this.datServ.printData(this.name, this.price, this.option);
 this.datServ.showArray();
  }
}
