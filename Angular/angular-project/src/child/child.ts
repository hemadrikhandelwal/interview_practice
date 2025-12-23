import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [CommonModule,FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.scss',
  standalone:true
})
export class Child {

  
  @Input() nameofChannel = ''; 

  constructor(){
    console.warn("chidlconstructos  is called")
  }

  ngOnInit(){
    console.warn("ngoninit of child ")
  }

  
  ngOnChanges(chnages:SimpleChange){
    console.log(chnages);
    console.warn('the onchnage of child');
  }

  ngDoCheck(){
    console.warn("child deo check ");
  }
}
