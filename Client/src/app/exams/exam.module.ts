import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamConfigComponent } from './config/exam-config.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExamConfigRoutingModule } from './exam-routing.module';

@NgModule({
  declarations: [ExamConfigComponent],
  imports: [CommonModule, SharedModule,ExamConfigRoutingModule],
})
export class ExamModule {}
