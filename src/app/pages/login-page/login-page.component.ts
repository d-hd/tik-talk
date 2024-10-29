import { AuthService } from './../../auth/auth.service';
import {Component, inject, signal} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IconComponent } from '../../common-ui/icon/icon.component'


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, IconComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  authService = inject(AuthService)
  router = inject(Router)

  isPasswordVisible = signal<boolean>(false)

  form = new FormGroup({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required)
  })

  onSubmit() {
    if (this.form.valid) {
      this.authService.login({
        username: this.form.value.username ?? '',
        password: this.form.value.password ?? ''
      })
      .subscribe(val => {
        this.router.navigate([''])
        console.log(val);
      })
    }
  }
}
