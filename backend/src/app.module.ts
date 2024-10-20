import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { OfframpsModule } from "./offramps/offramps.module";

@Module({
  imports: [OfframpsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
