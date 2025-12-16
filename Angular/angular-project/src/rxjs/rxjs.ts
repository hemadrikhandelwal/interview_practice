import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { filter, from, interval, map, of, take } from 'rxjs';
import { User } from '../service/user';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.scss',
  standalone: true,
  imports:[RouterOutlet]
})
export class Rxjs {

  cityList$ = from(["Pune", "Mumbai", "Kolkata"]);
  noList$ = from([11,12,13,14,15,16,17,18,19,20]);
  rollNoList$ = of([11,12,13,14,15,16,17,18,19,20]);
  private user = inject(User);
  timeInterval = interval(1000);


  constructor(){
    // this.timeInterval.pipe(
    //   take(3)
    // ).subscribe((value)=>console.log(value));

    // this.timeInterval.pipe(
    //   filter((num)=> num%2 !=0)
    // ).subscribe((value)=>console.log(value));

    // this.user.getJsonUser().subscribe((value)=>{
    //   console.log(value);
    // })

    // this.user.getSingleUser().subscribe((value)=>{
    //   console.log(value);
    // })
    




  }

}
