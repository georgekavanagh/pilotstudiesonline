import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'll-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  isLessThenLargeDevice;
  user:User;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
    private store: Store<AppState>) {
    this.getLoggedInUser();
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
  }

  getLoggedInUser(){
    this.store.select('user').subscribe(latestUser =>{
      if(latestUser && latestUser.length > 0){
        this.user = latestUser[0];
      }else{
        // get user from server by id
        this.user = {
          id:1,
          firstName:'George',
          lastName:'Kavanagh',
          email:'george.kavanagh',
          mobile:'+27725473665',
          dob:'09/04/1995',
          createdDate:'2021-12-23T12:19:39.313Z',
          gender:"male",
          role:"USER",
          courses:[],
          mockExams:[]
        }
      }
      
    })
  }

  onLogout(): void {
    this.router.navigate(['auth/login']);
  }
}
