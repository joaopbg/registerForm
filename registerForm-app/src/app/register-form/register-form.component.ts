import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  form !: FormGroup
  hide = true

  constructor(
    private fb: FormBuilder,
    private cepService : CepService) { }

  ngOnInit(): void {
    this.formInit()
  }

  private formInit(){
    this.form = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required,Validators.email],
      identityNumber: ['', Validators.required],
      pw: ['', Validators.required],
      confirmPw: ['', Validators.required],
      plataform: ['',Validators.required],
      zipCode: ['',Validators.required],
      hNumber: ['',Validators.required],
      street: new FormControl({value: '', disabled: true}),
      district: new FormControl({value: '', disabled: true}),
      city: new FormControl({value: '', disabled: true}),
      uf: new FormControl({value: '', disabled: true})
    })
  }

  public submitData(){
    alert('go to sleep sir')
  }
  
  public autoFill(){
    this.cepService.getCep(this.form.controls['zipCode'].value).subscribe(cep => {
      let aux = cep
      this.autoComplete(aux)
    })
  }

  public autoComplete(cep : any){
    this.form.controls['street'].patchValue(cep.logradouro)
    this.form.controls['city'].patchValue(cep.localidade)
    this.form.controls['district'].patchValue(cep.bairro)
    this.form.controls['uf'].patchValue(cep.uf)
  }
}

