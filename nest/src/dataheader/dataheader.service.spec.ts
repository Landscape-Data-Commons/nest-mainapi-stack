import { Test, TestingModule } from '@nestjs/testing';
import { DataheaderService } from './dataheader.service';

describe('DataheaderService', () => {
  let service: DataheaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataheaderService],
    }).compile();

    service = module.get<DataheaderService>(DataheaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
