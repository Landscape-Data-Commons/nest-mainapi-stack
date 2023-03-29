import { Test, TestingModule } from '@nestjs/testing';
import { AerosummaryController } from './aerosummary.controller';
import { AerosummaryService } from './aerosummary.service';

describe('AerosummaryController', () => {
  let controller: AerosummaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AerosummaryController],
      providers: [AerosummaryService],
    }).compile();

    controller = module.get<AerosummaryController>(AerosummaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
