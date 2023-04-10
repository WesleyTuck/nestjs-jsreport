import { Injectable } from "@nestjs/common";
import { JsreportService } from "./jsreport.service";
import ReportDataset from "./structure/datasets/base.dataset";
import data from "./structure/database/data";
import handlebarHelpers from "./structure/helpers/handlebar.helpers";

const TEMPLATES_PATH = "/assets/templates";

@Injectable()
export class AppService {

    constructor(private jsreportService: JsreportService){}

async generatePdf(){

    return this.jsreportService.generateReport(
      `${TEMPLATES_PATH}/reports/person.html`,
      new ReportDataset(data, 10),
      handlebarHelpers
    )
  }

    
}
