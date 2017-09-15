import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './oddNum.component.html',
  styleUrls: ['./oddNum.component.css']
})
export class OddComponent implements OnInit {
  @Input() oddNum: number;

  constructor() { }

  ngOnInit() {
  }

}
