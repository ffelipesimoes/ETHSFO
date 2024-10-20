import { Test, TestingModule } from '@nestjs/testing';
import { OfframpsController } from './offramps.controller';
import { OfframpsService } from './offramps.service';

describe('OfframpsController', () => {
  let controller: OfframpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfframpsController],
      providers: [OfframpsService],
    }).compile();

    controller = module.get<OfframpsController>(OfframpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
