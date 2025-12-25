import { CommonModule } from '@angular/common';
import { Component, ContentChild, input, Input, SimpleChange } from '@angular/core';
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

  constructor(){
    console.warn("chidlconstructos  is called",this.nameofChannel)
  }

  ngOnInit(){
    console.warn("ngoninit of child ",this.nameofChannel)
    console.log("oninit -"+this.projectContent);
  }

  
  ngOnChanges(chnages:SimpleChange){
    console.log(chnages);
    console.warn('the onchnage of child');
        console.log("Dochanges -"+this.projectContent);
  }

  ngDoCheck(){
    console.warn("child deo check ");
        console.log("do check -"+this.projectContent);

  }

  ngAfterContentInit(){
    console.warn('child content init');
        console.log("aftercontentinit -"+this.projectContent);

  }
}
