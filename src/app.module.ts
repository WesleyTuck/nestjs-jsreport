import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { JsreportService } from "./jsreport.service";

@Module({
  controllers: [AppController],
  providers: [AppService, JsreportService]

})
export class AppModule {}
