import { Test, TestingModule } from '@nestjs/testing';
import { DatasoilstabilityService } from './datasoilstability.service';

describe('DatasoilstabilityService', () => {
  let service: DatasoilstabilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatasoilstabilityService],
    }).compile();

    service = module.get<DatasoilstabilityService>(DatasoilstabilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
