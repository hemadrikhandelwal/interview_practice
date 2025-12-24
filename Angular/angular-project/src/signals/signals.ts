import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {


  count = signal(0);
  color= signal(["Red","Green","Blue"]);

  a = 10;
  b = 20;
  c = this.a+this.b

  x = signal(10);
  y = signal(20);
  z = computed(()=> this.x()+this.y())

  ngOnInit(){
    console.log(this.count());
    console.warn("z",this.z());
    this.x.set(50) ;
    console.log("z after update", this.z());
  }

  increse(){
    // this.count.set(this.count()+1);
    this.count.update(value=>value+1);
    this.color.update(values => [...values,"pink"]);
    console.warn(this.color());
  }

}
