import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoadingService {
  private showLoading = new BehaviorSubject<boolean>(false);
  showLoading$ = this.showLoading.asObservable();

  constructor() {}

  showLoadingFn(show: boolean) {
    this.showLoading.next(show);
  }
}
