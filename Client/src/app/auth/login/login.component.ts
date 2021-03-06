import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { AppState } from 'src/app/app.state';
import * as UserActions from '../../actions/user.actions';
import { UserDTO } from '../shared/auth.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  signingIn:boolean = false;
  
  constructor(private fb:FormBuilder,
              private router: Router,
              private store:Store<AppState>,
              private authService: AuthService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.fb.group({
      email:[null,[Validators.required]],
      password:[null,[Validators.required]],
    })
  }

  checkFormValidation(){
    if(!this.form.valid){
      this.form.markAllAsTouched();
    }else{
      this.signIn();
    }

  }

  signIn(){
    this.signingIn = true;
    // let tempUser = {
    //   id: 1,
    //   email: "george.kavanagh16@gmail.com",
    //   firstName: "George",
    //   lastName: "Kavanagh",
    //   mobile:'+27725473665',
    //   dob:'09/04/1995',
    //   createdDate:'2021-12-23T12:19:39.313Z',
    //   gender:"male",
    //   role:"USER",
    //   courses:[],
    //   mockExams:[]
    // }


    setTimeout(()=>{
      this.signingIn = true;
      this.authService.login(this.form.value).subscribe(currentUser=>{
        let user:UserDTO = {...currentUser};
        window.localStorage.setItem('profile',JSON.stringify(user));
        this.store.dispatch(new UserActions.AddUser(currentUser));
        this.router.navigate(['/dashboard']);
      },error=>{
        this.signingIn = false;
        let message = this.generateErrorMsg(error);
        this.messageService.clear();
        this.messageService.add({severity:'error',summary: error.title, detail:message});
      })
    },2000)
  }

  generateErrorMsg(error){
    switch (error.status){
      case 401:
        return "The entered password/login is incorrect";
      default:
        return "An error occured, please try again"
    }


  }
}
