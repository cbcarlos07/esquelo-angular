import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup({
    user: new FormControl(null, {validators: [Validators.required]}),
    password: new FormControl(null, {validators: [Validators.required]})
  })
  constructor(){}

  ngOnInit(): void {
    
  }

  hasError(field: string){
    return this.formGroup.controls[field].invalid  && (this.formGroup.controls[field].touched || this.formGroup.controls[field].dirty)
  }

  logar(){
    console.log('logar');
    
  }

}
