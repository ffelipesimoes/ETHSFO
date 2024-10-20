import {Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus} from '@nestjs/common';
import { OfframpsService } from './offramps.service';
import { CreateOfframpDto } from './dto/create-offramp.dto';
import { UpdateOfframpDto } from './dto/update-offramp.dto';
import {QuoteOfframpRequest} from "./dto/quote-offramp.request";

@Controller('offramps')
export class OfframpsController {
  constructor(private readonly offrampsService: OfframpsService) {}

  @Post('/quote')
  async quote(@Body() quoteOfframpDto: QuoteOfframpRequest, @Res() res) {
    const quoteResponse = await this.offrampsService.quote(quoteOfframpDto);
    return res.status(HttpStatus.OK).json(quoteResponse); // Set status to 200 explicitly
  }

  @Post()
  create(@Body() createOfframpDto: CreateOfframpDto) {
    return this.offrampsService.create(createOfframpDto);
  }

  @Get()
  findAll() {
    return this.offrampsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offrampsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfframpDto: UpdateOfframpDto) {
    return this.offrampsService.update(+id, updateOfframpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offrampsService.remove(+id);
  }
}
