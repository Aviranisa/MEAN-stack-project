import { HttpClient } from '@angular/common/http';
import { Output , EventEmitter, ɵfindLocaleData} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-users-data',
  templateUrl: './all-users-data.component.html',
  styleUrls: ['./all-users-data.component.css']
})
  export class AllUsersDataComponent implements OnInit {

  otherData : Boolean = false;
  users : any[] = [];
  sub : Subscription = new Subscription();

  filteredUsers : any[] = [];
  searchKeyWord : string = "";
  constructor(private http : HttpClient, private router : Router) { }

  userCompletedAllTasks = () => {
    for(let i=0; i<this.users.length; i++) {
      let total: number = 0;
      for(let j=0; j < this.users[i].tasks.length; j++) {
        if(this.users[i].tasks[j].completed == false){
          total++
          if(total>=1){
            this.users[i].isCompleted=false;
            break;
          }
        }
      }
      if(total == 0){
        this.users[i].isCompleted = true
      }
    }
  }

  search = (searchKeyWord : string) => {
    this.filteredUsers = this.users.filter(user => user.name.indexOf(searchKeyWord) > -1 || user.email.indexOf(searchKeyWord) > -1);
  }

  ngOnInit(): void {
    this.sub = this.http.get<User[]>("http://localhost:2000/api/users").subscribe(data => {
    this.users = [...this.users , ...data];
    this.filteredUsers = this.users;
    this.userCompletedAllTasks();
    //console.log(this.users)
    });
  }

  ngOnChanges(): void {
    if(this.searchKeyWord){
      this.search(this.searchKeyWord);
    }else{
      this.filteredUsers = this.users;
    };
  }
  changePage(): void {

    this.router.navigate(['/Add']);
  }
  
  OnDestroy(): void {
    this.sub.unsubscribe();
  }
}
