import { Test, TestingModule } from '@nestjs/testing';
import { AerosummaryService } from './aerosummary.service';

describe('AerosummaryService', () => {
  let service: AerosummaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AerosummaryService],
    }).compile();

    service = module.get<AerosummaryService>(AerosummaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
