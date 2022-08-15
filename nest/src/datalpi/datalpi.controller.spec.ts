import { Test, TestingModule } from '@nestjs/testing';
import { DatalpiController } from './datalpi.controller';
import { DatalpiService } from './datalpi.service';

describe('DatalpiController', () => {
  let controller: DatalpiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatalpiController],
      providers: [DatalpiService],
    }).compile();

    controller = module.get<DatalpiController>(DatalpiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
