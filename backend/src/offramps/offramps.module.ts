import { Module } from '@nestjs/common';
import { OfframpsService } from './offramps.service';
import { OfframpsController } from './offramps.controller';
import {UnlimitClient} from "../clients/unlimit/unlimit.client";

@Module({
  controllers: [OfframpsController],
  providers: [OfframpsService, UnlimitClient],
})
export class OfframpsModule {}
