import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Custom } from 'src/app/user-form/custom';
import { AuthService } from '../auth.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

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
  private router: Router;

  constructor(fb: FormBuilder, private authenticationService: AuthService) {
   this.userform = fb.group({

    // username : [null, Validators.pattern('[^ @]*@[^ @]*')],
     username : ['', Validators.email],
     password : ['',
    Validators.pattern( '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}') ],
   });

   }

   get username() {
     return this.userform.get('username') as FormControl;
   }

   get password() {
    return this.userform.get('password') as FormControl;
  }

  get f() { return this.userform.controls; }
   login() {

      this.submitted = true;

      // stop here if form is invalid
      if (this.userform.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate(['/checkbox']);
                });
  }


   reset() {
    this.userform.reset();
  }
  ngOnInit() {
  }


}
