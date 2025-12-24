import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Child } from '../child/child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [CommonModule,Child,FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
  standalone:true,
})
export class Parent {
  channelName = 'hemadri';
  showChild :boolean = true;

  constructor(){
    console.warn('prent constructor is called')
  }

  ngOnInit(){
    console.warn("parent oninit is called");
  }

  ngDoCheck(){
    console.warn("parent  do check ");
  }

  ngOnChanges(){
    console.warn('the onchnage of parent');
  }

  
  ngAfterContentInit(){
    console.warn('parents aftercontent init');
  }

  
  

  togglechild(){
    this.showChild = !this.showChild;
  }

}
