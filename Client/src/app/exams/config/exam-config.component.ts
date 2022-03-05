import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BreakpointObserver } from '@angular/cdk/layout';
import * as Menu from '../../shared/data/menus';
import { HeaderService } from "src/app/shared/components/header/header.service";

@Component({
    selector: 'll-exam-config',
    templateUrl: './exam-config.component.html',
    styleUrls: ['./exam-config.component.scss']
  })
  export class ExamConfigComponent {
      isLessThenLargeDevice;
      examType:string;
      examName:string;
      constructor(private breakpointObserver: BreakpointObserver,private activatedRoute: ActivatedRoute, private headerService:HeaderService){
        this.headerService.show(false);
        this.examType = this.activatedRoute.snapshot.paramMap.get('type');
        this.examName = this.activatedRoute.snapshot.paramMap.get('name');
        console.log(this.examType)
        console.log(this.examName)
      }

      ngOnInit(): void {
        this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
          this.isLessThenLargeDevice = matches;
        });
      }
  }