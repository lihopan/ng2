import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  private loading = false;
  private error = '';

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService)
  {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      this.loading = true;
      this.authenticationService.login(this.email.value, this.password.value)
          .subscribe(result => {
              if (result === true) {
                  // login successful
                  console.log('login successful');
                  this.router.navigate(['/']);
              } else {
                  // login failed
                  console.log('login fail');
                  this.error = 'Username or password is incorrect';
                  this.loading = false;
              }
          });
    }
  }
}
