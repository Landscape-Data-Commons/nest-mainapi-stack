import { Test, TestingModule } from '@nestjs/testing';
import { DataheightController } from './dataheight.controller';
import { DataheightService } from './dataheight.service';

describe('DataheightController', () => {
  let controller: DataheightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataheightController],
      providers: [DataheightService],
    }).compile();

    controller = module.get<DataheightController>(DataheightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
