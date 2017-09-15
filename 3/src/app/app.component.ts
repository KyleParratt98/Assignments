import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logArr = [];
  showParagraph: boolean = false;
  numClicks = 0;

  OnButtonClick() {
    this.showParagraph = !this.showParagraph;
    this.numClicks=this.numClicks+1;
    this.logArr.push(this.numClicks );
  }
}
