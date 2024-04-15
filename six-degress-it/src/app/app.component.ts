import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {
  loginForm = new FormGroup ({
    documentNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

   showpassword: boolean = true;

   url = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }
  }

 

  /*****Peticion http******
getPosts(){
  return new Promise(resolve =>{
    this.httpClient.get(this.url).subscribe(data=>{
      resolve(data);
      this.router.navigate(['/menu']);
    },error=>{
      console.log(error);
      
    });
  });
 }
 */ 

  
  /*visualiza la contraseña o la oculta* */

  togglePasswordText(){
     this.showpassword = !this.showpassword;
  }
  
}
