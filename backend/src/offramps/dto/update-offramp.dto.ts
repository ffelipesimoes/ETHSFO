import { PartialType } from '@nestjs/mapped-types';
import { CreateOfframpDto } from './create-offramp.dto';

export class UpdateOfframpDto extends PartialType(CreateOfframpDto) {}
