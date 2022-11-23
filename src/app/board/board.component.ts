import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {PaddleComponent} from "./paddle/paddle.component";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @ViewChild('left') left: PaddleComponent | undefined;
  @ViewChild('right') right: PaddleComponent | undefined;

  pause = false;
  redScore = 0;
  blueScore = 0;

  ball = {x: 100, y: 100};
  boundaries = {left: 0, right: 415, top: 0, bottom: 295};
  direction = {x: 1, y: 1};
  speed = 2;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == ' ') {
      this.pause = !this.pause;
    }
  }

  constructor() {
    setInterval(this.updatePos.bind(this), 10);
  }

  updatePos() {
    if (this.pause) {
      return;
    }

    if (this.ball.x < this.boundaries.left) {
      this.direction.x = 1;
      let miss = this.left?.checkMiss(this.ball);
      if (miss) {
        this.pause = true;
        this.blueScore += 1;
        let self = this;
        setTimeout(function(){
          self.pause = false;
          self.ball = {x: 100, y: 100};
        }, 1000);

      }
    }

    if (this.ball.x > this.boundaries.right) {
      this.direction.x = -1;
      let miss = this.right?.checkMiss(this.ball);
      if (miss) {
        this.pause = true;
        this.redScore += 1;
        let self = this;
        setTimeout(function(){
          self.ball = {x: 100, y: 100};
          self.pause = false
        }, 1000);
      }
    }

    if (this.ball.y < this.boundaries.top) {
      this.direction.y = 1;
    }

    if (this.ball.y > this.boundaries.bottom) {
      this.direction.y = -1;
    }

    this.ball.x += this.direction.x * this.speed;
    this.ball.y += this.direction.y * this.speed;
  }


}
