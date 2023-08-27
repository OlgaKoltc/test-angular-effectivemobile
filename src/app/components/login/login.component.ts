import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() formError = 'login or password is incorrect';
  
  @Output() login = new EventEmitter();
  loginForm!: FormGroup;

  formGroup: any;
  constructor(private router: Router, private authService: AuthService) {}

  submitLogin() {
    this.login.emit(this.formGroup.value);
    // this.authService.login(this.loginForm.value).subscribe({
    //   next: () => this.router.navigate(['admin']),
    //   error: (err: { message: string }) => alert(err.message),
    // });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
        ),
      ]),
    });
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }
  onFormChange() {
    this.formError = '';
  }
}
