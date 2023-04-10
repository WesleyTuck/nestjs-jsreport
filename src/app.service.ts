import { Injectable } from "@nestjs/common";
import { JsreportService } from "./jsreport.service";
import ReportDataset from "./report-models/datasets/base.dataset";
import dataset from "./dataset";
import handlebarHelpers from "./report-models/helpers/handlebar.helpers";

const TEMPLATES_PATH = "/assets/templates";

@Injectable()
export class AppService {

    constructor(private jsreportService: JsreportService){}

async generatePdf(){

    return this.jsreportService.generateReport(
      `${TEMPLATES_PATH}/reports/person.html`,
      new ReportDataset(dataset, 10),
      handlebarHelpers
    )
  }

    
}
