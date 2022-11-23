import {Component, ElementRef, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-paddle',
  templateUrl: './paddle.component.html',
  styleUrls: ['./paddle.component.css']
})
export class PaddleComponent {
  @Input() up: string = "";
  @Input() down: string = "";

  yPos = 100;
  speed = 10;

  constructor(private ref: ElementRef) {
    ref.nativeElement.getBoundingClientRect();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == this.up) {
      this.yPos -= this.speed;
      this.yPos = Math.max(0,this.yPos);
    }

    if (event.key == this.down) {
      this.yPos += this.speed;
      this.yPos = Math.min(220, this.yPos);
    }
  }

  public checkMiss(ball: { x: number; y: number }) {

    let paddleTop = this.yPos;
    let paddleBottom = paddleTop + 100;

    if (paddleTop > ball.y || paddleBottom < ball.y) {
      if (ball.x < 10 || ball.x > 400 ) {
        return true;
      }
    }
    return false;
  }
}
