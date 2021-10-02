import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  public form !: FormGroup

  ngOnInit(): void {
    this.formInit()
  }

  private formInit(){
    this.form = this.fb.group({
      login:['',Validators.required],
      password:['',Validators.required],
    })
  }

}
