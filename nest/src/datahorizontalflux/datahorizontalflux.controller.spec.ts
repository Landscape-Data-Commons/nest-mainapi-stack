import { Test, TestingModule } from '@nestjs/testing';
import { DatahorizontalfluxController } from './datahorizontalflux.controller';
import { DatahorizontalfluxService } from './datahorizontalflux.service';

describe('DatahorizontalfluxController', () => {
  let controller: DatahorizontalfluxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatahorizontalfluxController],
      providers: [DatahorizontalfluxService],
    }).compile();

    controller = module.get<DatahorizontalfluxController>(DatahorizontalfluxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
