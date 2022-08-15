import { Test, TestingModule } from '@nestjs/testing';
import { GeoindicatorsService } from './geoindicators.service';

describe('GeoindicatorsService', () => {
  let service: GeoindicatorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeoindicatorsService],
    }).compile();

    service = module.get<GeoindicatorsService>(GeoindicatorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
