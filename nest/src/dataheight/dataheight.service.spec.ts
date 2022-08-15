import { Test, TestingModule } from '@nestjs/testing';
import { DataheightService } from './dataheight.service';

describe('DataheightService', () => {
  let service: DataheightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataheightService],
    }).compile();

    service = module.get<DataheightService>(DataheightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
