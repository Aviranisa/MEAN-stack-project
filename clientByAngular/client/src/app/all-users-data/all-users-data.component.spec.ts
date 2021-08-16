import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersDataComponent } from './all-users-data.component';

describe('AllUsersDataComponent', () => {
  let component: AllUsersDataComponent;
  let fixture: ComponentFixture<AllUsersDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUsersDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
