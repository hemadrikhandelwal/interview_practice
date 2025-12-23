import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.scss',
})
export class LifeCycle implements OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {

  constructor(){
    console.log("constructor"); 
  }

  ngOnInit(){
    console.log("on init call");

  }

  ngDoCheck(){
    console.log("do check"); // calles after ngONinit and that after every change detechtio happens 
  }

  ngAfterContentInit(){
    console.log("after content init")
  }

  ngAfterContentChecked(){
    console.log("after content checked")
  }

  ngAfterViewInit(){
    console.log('After view init')
  }

  ngAfterViewChecked(){
    console.log('after view checked')
  }
  


}
