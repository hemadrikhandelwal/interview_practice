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
channelName = '';
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

  
  

  togglechild(){
    this.showChild = !this.showChild;
  }

}
