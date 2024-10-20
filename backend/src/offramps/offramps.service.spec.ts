import { Test, TestingModule } from '@nestjs/testing';
import { OfframpsService } from './offramps.service';

describe('OfframpsService', () => {
  let service: OfframpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfframpsService],
    }).compile();

    service = module.get<OfframpsService>(OfframpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
