import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamConfigComponent } from './config/exam-config.component';


const routes: Routes = [
  {
    path: 'config/:type/:name',
    component: ExamConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamConfigRoutingModule {}
