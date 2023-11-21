import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../core/services/user-service/user.service';
import { Subject, takeUntil } from 'rxjs';
import { IUser } from '../core/interfaces/user.interface';
import { LoadingService } from '../core/services/loading-service/loading.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})

export class UserListComponent implements OnInit, OnDestroy {
  private destroy: Subject<boolean> = new Subject();
  listUsers: IUser[] = [];
  searchPipe = '';

  constructor(
    private userService: UserService,
    private loadingService: LoadingService,
  ) {
    this.userService.userList$
      .pipe(takeUntil(this.destroy))
      .subscribe((resp) => {
        if (resp && resp.length) {
          this.listUsers = resp;
        }
      });
  }

  ngOnInit() { }

  getUsers() {
    this.loadingService.showLoadingFn(true);
    setTimeout(() => {
      this.loadingService.showLoadingFn(false);
    }, 1000);
    this.userService.getUsersList();
  }

  clearUsers() {
    this.listUsers = [];
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.complete();
  }
}
