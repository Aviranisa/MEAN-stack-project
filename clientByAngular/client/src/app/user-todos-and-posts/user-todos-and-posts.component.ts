import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-user-todos-and-posts',
  templateUrl: './user-todos-and-posts.component.html',
  styleUrls: ['./user-todos-and-posts.component.css']
})
export class UserTodosAndPostsComponent implements OnInit {
 
  @Input()user_id : any ="";
  user : User = new User();
  sub : Subscription = new Subscription();
  
  tasksViewOrNew : boolean = true;
  newTask : String = "";
  
  postsViewOrNew : boolean = true;
  newPost : any = {title : "" , body : ""};

  @Output() userCompletedEvent = new EventEmitter<String>();
  constructor(private route: ActivatedRoute , private http : HttpClient) { }

  createEvent(IsCompleted : String) : void {
      this.userCompletedEvent.emit(IsCompleted);
  }

  markCompleted(task_id : String):void {
    this.user.tasks?.map(task => {
      if(task._id === task_id && task.completed == false) {
        task.completed=true;
        this.sub = this.http.put("http://localhost:2000/api/users/"+this.user_id,this.user).subscribe(data => data);
      }
      this.countCompletedTasks()
    });
  }
  countCompletedTasks(): void{
    let completedCounter = 0;
    this.user.tasks?.forEach(task => {
      if(task.completed){
        completedCounter++
        if (completedCounter == this.user.tasks?.length){
          this.createEvent("true");
        }
      }
    });
  }

  updateNewTask(): void{
    let counter = 1;
    this.user.tasks?.forEach(task => {
      counter++
    });
    this.user.tasks?.push({_id:counter.toString(), title : this.newTask ,completed: false});
    this.sub = this.http.put("http://localhost:2000/api/users/"+this.user_id,this.user).subscribe(data => alert(data));
    this.createEvent("false");
    this.tasksViewOrNew = true;
  }
  updateNewPost(): void{
    let counter = 1;
    this.user.posts?.forEach(post => {
      counter++
    });
    this.user.posts?.push({_id : counter.toString() ,title: this.newPost.title , body: this.newPost.body })
    this.sub = this.http.put("http://localhost:2000/api/users/"+this.user_id,this.user).subscribe(data => alert(data));
    this.postsViewOrNew = true;
  }

  ngOnInit(): void {
    this.sub = this.http.get<User>("http://localhost:2000/api/users/"+this.user_id).subscribe(item => {
      this.user = item;
    });
  }

  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}