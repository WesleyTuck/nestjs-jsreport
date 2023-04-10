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

    const dataset =  new ReportDataset(data, 5);
    dataset.user = "wesley.silva";
    dataset.companyName = "Soulbyte Studio"

    return this.jsreportService.generateReport(
      `${TEMPLATES_PATH}/reports/person.html`,
      dataset,
      handlebarHelpers
    )
  }
}
