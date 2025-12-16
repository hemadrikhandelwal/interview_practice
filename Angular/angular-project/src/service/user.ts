import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {

  constructor(private http: HttpClient) { }

  getJsonUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      tap((user:any)=>console.log(user)),
      map((userList: any) => userList.map((user: any) => {
        return { id: user.id, name: user.name }
      })
      ))
  }

  getSingleUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users/2').pipe(
      map((userList:any)=> userList.name = 'Hemadri Khandelwal'),
      tap((userList:any)=> console.log(userList))
    )

  }
}
