import { Injectable } from "@angular/core";
import { ExamConfig } from "./exam-config.model";

@Injectable({
  providedIn: 'root'
})
export class ExamConfigService {
 
    private _examConfig:ExamConfig;
 
    setExamConfig(examConfig: ExamConfig) {
        this._examConfig = examConfig;
    }
 
    getExamConfig(): ExamConfig {
        return this._examConfig;
    }
}