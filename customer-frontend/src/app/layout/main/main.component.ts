import {Customer} from '#shared/model/customer.model';
import {AuthService} from '#shared/services/auth.service';
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StorageService} from "#shared/services/storage.service";
import {StoreService} from "#modules/store/store.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly storageService: StorageService
  ) {

  }

  ngOnInit(): void {
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
