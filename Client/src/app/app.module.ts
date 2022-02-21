import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';
import { courseReducer } from './reducers/course.reducer';
import { mockExamReducer } from './reducers/mock-exam.reducer'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, NgxSkeletonLoaderModule, 
  StoreModule.forRoot({
    user : userReducer,
    courses : courseReducer,
    mockExams : mockExamReducer
  })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
