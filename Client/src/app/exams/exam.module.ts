import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam/exam.component';

@NgModule({
  declarations: [ExamComponent],
  imports: [CommonModule, SharedModule,ExamRoutingModule],
})
export class ExamModule {}
