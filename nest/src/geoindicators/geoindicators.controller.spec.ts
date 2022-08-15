import { Test, TestingModule } from '@nestjs/testing';
import { GeoindicatorsController } from './geoindicators.controller';
import { GeoindicatorsService } from './geoindicators.service';

describe('GeoindicatorsController', () => {
  let controller: GeoindicatorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeoindicatorsController],
      providers: [GeoindicatorsService],
    }).compile();

    controller = module.get<GeoindicatorsController>(GeoindicatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
