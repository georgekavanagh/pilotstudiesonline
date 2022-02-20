import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/providers/custom-validators';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form:FormGroup;

  constructor(private fb:FormBuilder) { }

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
    console.log(this.form.value);
  }

}
