import { Test, TestingModule } from '@nestjs/testing';
import { DatagapService } from './datagap.service';

describe('DatagapService', () => {
  let service: DatagapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatagapService],
    }).compile();

    service = module.get<DatagapService>(DatagapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
