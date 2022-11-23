import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent {

  @Input() yPos: number = 0;
  @Input() xPos: number = 0;

}
