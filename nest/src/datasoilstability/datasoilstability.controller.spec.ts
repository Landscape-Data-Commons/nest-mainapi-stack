import { Test, TestingModule } from '@nestjs/testing';
import { DatasoilstabilityController } from './datasoilstability.controller';
import { DatasoilstabilityService } from './datasoilstability.service';

describe('DatasoilstabilityController', () => {
  let controller: DatasoilstabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatasoilstabilityController],
      providers: [DatasoilstabilityService],
    }).compile();

    controller = module.get<DatasoilstabilityController>(DatasoilstabilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
