import { Test, TestingModule } from '@nestjs/testing';
import { DatadustdepositionService } from './datadustdeposition.service';

describe('DatadustdepositionService', () => {
  let service: DatadustdepositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatadustdepositionService],
    }).compile();

    service = module.get<DatadustdepositionService>(DatadustdepositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
