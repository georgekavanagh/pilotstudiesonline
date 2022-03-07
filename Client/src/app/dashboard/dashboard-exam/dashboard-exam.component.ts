import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { SelectItem } from "primeng/api";
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
    showConfigModal:boolean = false;
    creatingExam:boolean = false;
    configModalHeaderText:string;
    examConfigForm:FormGroup;
    examCategories:SelectItem[] = [];
    examDurationOptions:SelectItem[] = [];

    constructor(private examService:ExamService, private router:Router,
      private fb:FormBuilder){
      this.currentUser = JSON.parse(window.localStorage.getItem('profile'));
      this.initExamDurationOptions();
      this.getUserExams();
      this.buildForm();
    }

    initExamDurationOptions(){
      this.examDurationOptions = [
        {label:'Unlimited',value:'unlimited'},
        {label:'Limited',value:'limited'},
      ]
    }

    getUserExams(){
      this.examService.getExamsByUserId(this.currentUser.id).subscribe((mockExams:MockExam[])=>{
        this.userExams = mockExams;
      })
    }

    buildForm(){
      this.examConfigForm = this.fb.group({
        subject: [null],
        category: [null],
        totalQuestions: [null],
        durationType:[null],
        timeDuration:[null],
        answersAtEnd:[true] 
      });
    }

    showExamConfigModal(exam){
       this.setFormToDefaults(exam);
       this.getCategoriesForExam(exam)
       this.configModalHeaderText = 'Custom Exam Configuration';
       this.showConfigModal = true;
    }

    setFormToDefaults(exam){
      this.examConfigForm.reset();
      this.examConfigForm.controls['subject'].patchValue(exam.name);
      this.examConfigForm.controls['totalQuestions'].patchValue(30);
      this.examConfigForm.controls['durationType'].patchValue('limited');
      this.examConfigForm.controls['timeDuration'].patchValue(120);
      this.examConfigForm.controls['answersAtEnd'].patchValue(true);
    }

    getCategoriesForExam(exam){
      //Make backend call for categories
      this.examCategories = [
        {label:'All Sections',value:null},
        {label:'Part 1 definitions',value:'Part 1'},
        {label:'Part 61',value:'Part 61'},
        {label:'Part 67 Medical Requirements',value:'Part 67'},
        {label:'Part 12',value:'Part 12'},
        {label:'Accidents & Incidents',value:'Accidents & Incidents'},
        {label:'Licensing',value:'Licensing'},
        {label:'Rules of the air',value:'Rules of the air'},
        {label:'Part 91',value:'Part 91'},
        {label:'Flight Ops',value:'Flight Ops'},
        {label:'Instrumentation & Equipment',value:'Instrumentation & Equipment'}
      ]
      this.examConfigForm.controls['category'].patchValue(this.examCategories[0].value);
    }

    checkFormValidation(){

    }

  }