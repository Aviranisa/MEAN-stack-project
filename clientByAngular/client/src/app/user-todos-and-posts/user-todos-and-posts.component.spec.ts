import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTodosAndPostsComponent } from './user-todos-and-posts.component';

describe('UserTodosAndPostsComponent', () => {
  let component: UserTodosAndPostsComponent;
  let fixture: ComponentFixture<UserTodosAndPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTodosAndPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTodosAndPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
