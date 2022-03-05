import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MockExam } from "src/app/models/mock-exam.model";
import { User } from "src/app/models/user.model";
import { ExamService } from "./exam.service";

@Component({
    selector: 'll-dashboard-exam',
    templateUrl: './dashboard-exam.component.html',
    styleUrls: ['./dashboard-exam.component.scss']
  })
  export class DashboardExamComponent {
    currentUser:User;
    userExams:MockExam[] = [];

    constructor(private examService:ExamService, private router:Router){
      this.currentUser = JSON.parse(window.localStorage.getItem('profile'));
      this.getUserExams();
    }

    getUserExams(){
      this.examService.getExamsByUserId(this.currentUser.id).subscribe((mockExams:MockExam[])=>{
        this.userExams = mockExams;
      })
    }

    routeToExamConfig(type,name){
      this.router.navigate(['/exam/config', type,name ]);
    }

  }