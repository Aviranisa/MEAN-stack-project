import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newUser : User = new User();
  sub : Subscription = new Subscription();
  constructor(private http : HttpClient,private router : Router) { }


  AddNewUser():void {
    this.sub = this.http.post("http://localhost:2000/api/users",this.newUser).subscribe(data => data);
    this.router.navigate(['/']);
  }

  backToList():void {
    this.router.navigate(['/']);

  }
  ngOnInit(): void {

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
