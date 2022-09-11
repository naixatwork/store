import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../shared/services/auth.service";
import {first} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder, private readonly authService: AuthService, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      'Username': ['', [Validators.required]],
      'Password': ['', [Validators.required]],
    });
  }

  // public onSubmit(): void {
  public login(): void {
    this.authService.login(this.form.value).pipe(first()).subscribe((response) => {
      if (response) {
        this.authService.storeCredentials(this.form.value);
        this.router.navigate(['/dashboard/package'])
      }
    });
  }
}
