import {Component, OnInit} from '@angular/core';
import {AuthService} from "#shared/services/auth.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private readonly authService: AuthService) {
  }

  ngOnInit(): void {
  }

  public logout(): void {
    this.authService.logout();
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
