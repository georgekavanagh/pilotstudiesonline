import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CustomValidators } from 'src/app/shared/providers/custom-validators';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form:FormGroup;
  registeringUser:boolean = false;

  constructor(private fb:FormBuilder,
              private router: Router,
              private authService:AuthService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.fb.group({
      firstName:[null,[Validators.required]],
      lastName:[null,[Validators.required]],
      email:[null,[Validators.required]],
      password:[null,[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")
      ]],
      confirmPassword: ['', Validators.required],
    },
    {validators: [CustomValidators.mustMatch('password', 'confirmPassword')]}
    )
  }

  checkFormValidation(){
    if(!this.form.valid){
      this.form.markAllAsTouched();
    }else{
      this.registerNewUser();
    }
  }

  registerNewUser(){
    this.registeringUser = true;
    let user = {...this.form.value};
    delete user.confirmPassword;
    setTimeout(()=>{
      this.authService.register(user).subscribe(res=>{
       // window.localStorage.setItem('profile',JSON.stringify(user));
      this.registeringUser = false;
      this.router.navigate(['/auth','login']);
      },error=>{
        this.registeringUser = false;
        this.messageService.clear();
        this.messageService.add({severity:'error',detail:(error.title ?? 'An error occured')});
      })
    },2000)
  }

}
