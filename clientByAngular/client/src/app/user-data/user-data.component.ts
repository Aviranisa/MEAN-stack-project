import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  sub : Subscription = new Subscription();

  clickLink : Boolean = false;
  overLink : Boolean = false;
  @Input()user_id : String = "";
  @Input()userName : String = "";
  @Input()userEmail : String = "";

  userOtherData : String = "false";
  @Input()userIsCompleted : String = "";

  @Input()userCity : String = "";
  @Input()userStreet : String = ""; 
  @Input()userZipcode : String = "";

  constructor(private http : HttpClient , private router : Router) { }


  istrue (stringToCheck : String) : boolean {
    if(stringToCheck === "true"){
      return true;
    }
    return false;
  }

  userOtherDataIn (): void{
    if(this.istrue(this.userOtherData) == null){
      this.userOtherData = "true"
    }
    else{
      this.userOtherData = "true";
    }
  }


  userOtherDataOut(): void{
    this.userOtherData = "false";
  }

  updateUser(): void {
    if(this.userOtherData == "false") {
      let userObj : User = {
                            name : this.userName,
                            email : this.userEmail
                          }
      this.sub = this.http.put<string>("http://localhost:2000/api/users/"+this.user_id,userObj).subscribe(data =>{
        alert(data)
      });
    }else if(this.userOtherData == "true") {
      let userObj : User = {
        name : this.userName,
        email : this.userEmail,
        city : this.userCity,
        street : this.userStreet,
        zipcode : this.userZipcode 
      }
      this.sub = this.http.put<string>("http://localhost:2000/api/users/"+this.user_id,userObj).subscribe(data =>{
        alert(data)
      });
    }
  }

  deleteUser(): void {
    this.sub = this.http.delete<string>("http://localhost:2000/api/users/"+this.user_id).subscribe(data =>data);
    window.location.reload();
  }

  ngOnInit(): void {
    console.log(this.userOtherData)
  }

  todosPage(): void {

    this.router.navigate(['/todos/'+ this.user_id]);
  }

  OnDestroy(): void {
    this.sub.unsubscribe();
  }

}
