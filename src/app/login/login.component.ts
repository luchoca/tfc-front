import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ClientService } from '../modules/client/service/client.service';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formReg: FormGroup;
  googleLogoURL =
    'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';

  constructor(
    private clientService: ClientService,
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.formReg = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL)
    );
  }

  ngOnInit(): void {}
  // FUNCION PARA REGISTRAR
  onRegister() {
    this.clientService
      .register(this.formReg.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/products']);
      })
      .catch((error) => console.log(error));
  }

  loginConGoogle() {
    this.clientService
      .loginWithGoogle()
      .then((response) => {
        console.log('client', response);
        if (response.operationType === 'signIn') {
          console.log('el usuario se logeo correctamente');
          this.router.navigate(['/products']);
        } else {
          console.log('no se pudo logear');
        }
      })
      .catch((error) => console.log(error));
  }

  logOut() {
    this.clientService
      .loginWithGoogle()
      .then((response) => {
        console.log(response);
        this.router.navigate(['']);
      })
      .catch((error) => console.log(error));
  }
}

export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}
