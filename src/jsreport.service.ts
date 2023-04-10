import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import jsreport from 'jsreport';
import { join } from 'path';

@Injectable()
export class JsreportService {
  private readonly jsreportInstance: any;

  constructor() {
    // Initialize jsreport instance
    this.jsreportInstance = jsreport();
    this.jsreportInstance.init();
  }

  async generateReport(templatePath: string, data: any, helpers: string): Promise<Buffer> {

    const template = await readFileSync(join(__dirname, templatePath), 'utf-8');

    // Render the report using the template and data
    const result = await this.jsreportInstance.render({
      template: {
        content: template,
        engine: 'handlebars',
        recipe: 'chrome-pdf',
        helpers: helpers
      },
      data: data,
    });

    // Return the generated report as a Buffer
    return result.content;
  }
}