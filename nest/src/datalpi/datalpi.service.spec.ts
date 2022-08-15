import { Test, TestingModule } from '@nestjs/testing';
import { DatalpiService } from './datalpi.service';

describe('DatalpiService', () => {
  let service: DatalpiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatalpiService],
    }).compile();

    service = module.get<DatalpiService>(DatalpiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
