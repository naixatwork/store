import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "#shared/services/auth.service";
import {Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder, private readonly authService: AuthService, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'phoneNumber': ['', [Validators.required]],
      "products": [[], []]
    });
  }

  public login(): void {
    this.authService.signUp(this.form.value).pipe(first()).subscribe((response) => {
      this.authService.storeCredentials(response);
      this.router.navigate(['/store'])
    });
  }
}
