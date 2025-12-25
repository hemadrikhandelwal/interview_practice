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

  parentName = 'papapa';

  togglechild(){
    this.showChild = !this.showChild;
  }

  receiveMessage(event:any){
    console.warn(" parentsss", event);
  }

}
