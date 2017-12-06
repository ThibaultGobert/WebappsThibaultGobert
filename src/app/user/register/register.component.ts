import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

function passwordValidator( length: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    return control.value.length < length ? { 'passwordTooShort' :
      { requiredLength: length, actualLength: control.value.length}} : null;
  };
}

function comparePasswords(control: AbstractControl): { [key: string]: any}{
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null: { 'passwordsDiffer': true}
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: FormGroup;

  get passwordControl(): FormControl {
    return <FormControl> this.user.get('passwordGroup').get('password');
  }

  constructor(private authenticationService: AuthenticationService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)],
              this.serverSideValidateUsername()],
              passwordGroup: this.fb.group({
                password: ['', [Validators.required, passwordValidator(12)]],
                confirmPassword: ['', Validators.required]
              }, { validator: comparePasswords })
    });
  }

  serverSideValidateUsername(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.authenticationService.checkUserNameAvailability(control.value).map(alreadyExists =>  {
        if (!alreadyExists){
          //doesn't exist, all is good
          return null;
        }
        return { userAlreadyExists: true};
      })
    }
  }

  onSubmit(){
    this.authenticationService.register(this.user.value.username, this.passwordControl.value).subscribe( val => {
      if(val){
        this.router.navigate(['/wishlist/list']);
      }
    })
  }

}
