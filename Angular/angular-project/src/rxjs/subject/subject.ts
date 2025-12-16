import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.html',
  styleUrl: './subject.scss',
  standalone:true
})
export class SubjectComponent implements OnInit  {

  student$ = new Subject()

  constructor(){
  }

  ngOnInit(): void {
    this.student$.subscribe((value)=>{
      debugger;
    })
    this.student$.next('this is my subject');

  }



}
