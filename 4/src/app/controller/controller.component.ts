import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class GameControlComponent implements OnInit {
  numCount = 1;
  interval;
  @Output() intervalEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  stop() {
    clearInterval(this.interval);
  }

  start() {
    this.interval = setInterval(() => {
        this.intervalEvent.emit(this.numCount);
        this.numCount++ ;}, 2000);
  }

}
