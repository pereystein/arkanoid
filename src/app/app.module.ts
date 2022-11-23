import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { PaddleComponent } from './board/paddle/paddle.component';
import { BallComponent } from './board/ball/ball.component';
import { ScoreComponent } from './board/score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PaddleComponent,
    BallComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
