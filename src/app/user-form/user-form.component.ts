import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Custom } from 'src/app/user-form/custom';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  styles : ['input.ng-invalid { border-color : red}']
})
export class UserFormComponent implements OnInit {


  public userform: FormGroup;
  loading = false;
  submitted = false;

  constructor(fb: FormBuilder) {
   this.userform = fb.group({

     username : [null],
     password : [null, Validators.minLength(6)],

   });

   }

   get username() {
     return this.userform.get('username') as FormControl;
   }

   get password() {
    return this.userform.get('password') as FormControl;
  }


   send() {
        this.submitted = true;

    // stop here if form is invalid
    if (this.userform.invalid) {
        return;
    }

   }
   reset() {
    this.userform.reset();
  }
  ngOnInit() {
  }


}
