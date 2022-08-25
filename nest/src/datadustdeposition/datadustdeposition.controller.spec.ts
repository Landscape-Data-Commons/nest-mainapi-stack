import { Test, TestingModule } from '@nestjs/testing';
import { DatadustdepositionController } from './datadustdeposition.controller';
import { DatadustdepositionService } from './datadustdeposition.service';

describe('DatadustdepositionController', () => {
  let controller: DatadustdepositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatadustdepositionController],
      providers: [DatadustdepositionService],
    }).compile();

    controller = module.get<DatadustdepositionController>(DatadustdepositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
