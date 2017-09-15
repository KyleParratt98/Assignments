import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './evenNum.component.html',
  styleUrls: ['./evenNum.component.css']
})
export class EvenComponent implements OnInit {
  @Input() evenNum: number;

  constructor() { }

  ngOnInit() {
  }

}
