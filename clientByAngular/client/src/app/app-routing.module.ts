import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AllUsersDataComponent } from './all-users-data/all-users-data.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserTodosAndPostsComponent } from './user-todos-and-posts/user-todos-and-posts.component';

const routes: Routes= [
                        {path : "", component: AllUsersDataComponent},
                        {path : "Add", component: AddUserComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
