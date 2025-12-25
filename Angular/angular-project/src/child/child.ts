import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, input, Input, Output, SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [CommonModule,FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.scss',
  standalone:true
})
export class Child {

  
  @Input() nameofChannel =''; 

  @Input() childName:any ; 
  @ContentChild('parentTempl') projectContent:any;

  @Output() sendMessageEmitter = new EventEmitter();

  sendMessageToParent(e:any){
    this.sendMessageEmitter.emit(e.target.value);
  }
}
