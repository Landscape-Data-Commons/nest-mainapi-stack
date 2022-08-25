import { Test, TestingModule } from '@nestjs/testing';
import { DatahorizontalfluxService } from './datahorizontalflux.service';

describe('DatahorizontalfluxService', () => {
  let service: DatahorizontalfluxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatahorizontalfluxService],
    }).compile();

    service = module.get<DatahorizontalfluxService>(DatahorizontalfluxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
