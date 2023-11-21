import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { FilterByUserNamePipe } from './core/pipes/search-pipe/filter-by-user-name.pipe';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent, UserListComponent, FilterByUserNamePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgxSpinnerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
