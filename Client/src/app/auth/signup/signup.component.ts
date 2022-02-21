import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/shared/providers/custom-validators';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form:FormGroup;
  registeringUser:boolean = false;

  constructor(private fb:FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.fb.group({
      firstName:[null,[Validators.required]],
      lastName:[null,[Validators.required]],
      email:[null,[Validators.required]],
      password:[null,[Validators.required]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
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
    let user = {...this.form.value,courses:[],mockExams:[]};
    setTimeout(()=>{
      this.registeringUser = false;
      window.localStorage.setItem('profile',JSON.stringify(user));
      this.router.navigate(['/auth','login']);
    },3000)
  }

}
