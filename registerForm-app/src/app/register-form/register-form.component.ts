import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  form !: FormGroup
  hide = true

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formInit()
  }

  private formInit(){
    this.form = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required,Validators.email],
      pw: ['', Validators.required],
      confirmPw: ['', Validators.required],
      plataform: ['',Validators.required]
    })
  }

  public submitData(){
    alert('go to sleep sir')
  }

}

