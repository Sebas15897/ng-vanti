import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading-service/loading.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(
    private loadingService: LoadingService,
    private ngxSpinnerService: NgxSpinnerService
  ) {
    this.subscribeSpinner();
  }

  subscribeSpinner() {
    this.loadingService.showLoading$.subscribe((show) => {
      show ? this.ngxSpinnerService.show() : this.ngxSpinnerService.hide();
    });
  }
}
