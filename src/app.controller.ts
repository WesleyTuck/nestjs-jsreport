import { Controller, Get, Res} from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {

  constructor(private readonly appService: AppService){}

  @Get()
  async downloadPdf(@Res() res) {
   const buffer = await this.appService.generatePdf();
   res.end(buffer)
  }
}
