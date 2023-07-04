import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required]
  });

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  public login() {
    this.authService.login(this.form.getRawValue()).subscribe(() => {
      this.router.navigate(['search']);
    });
  }
}
