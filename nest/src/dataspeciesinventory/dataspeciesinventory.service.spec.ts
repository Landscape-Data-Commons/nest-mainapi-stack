import { Test, TestingModule } from '@nestjs/testing';
import { DataspeciesinventoryService } from './dataspeciesinventory.service';

describe('DataspeciesinventoryService', () => {
  let service: DataspeciesinventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataspeciesinventoryService],
    }).compile();

    service = module.get<DataspeciesinventoryService>(DataspeciesinventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
