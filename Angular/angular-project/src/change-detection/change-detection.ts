import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  imports: [],
  templateUrl: './change-detection.html',
  styleUrl: './change-detection.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeDetection {

  counter = 0;

  increseCounter(){
    this.counter++;
  }

  ngDoCheck(){
    console.warn("ANgular is chceking for chnage")
  }

}
