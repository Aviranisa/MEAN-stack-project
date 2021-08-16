import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersDataComponent } from './all-users-data/all-users-data.component';
import { UserDataComponent } from './user-data/user-data.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserTodosAndPostsComponent } from './user-todos-and-posts/user-todos-and-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersDataComponent,
    UserDataComponent,
    AddUserComponent,
    UserTodosAndPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
