import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.css']
})
export class DataShowComponent implements OnInit {

  @Input() foodData: {foodName: string, foodPrice: number, foodType: string};

  constructor() { }

  ngOnInit() {
  }

}
