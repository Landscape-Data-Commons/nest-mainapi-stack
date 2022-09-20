import { Test, TestingModule } from '@nestjs/testing';
import { TblSchemaService } from './tbl-schema.service';

describe('TblSchemaService', () => {
  let service: TblSchemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TblSchemaService],
    }).compile();

    service = module.get<TblSchemaService>(TblSchemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
