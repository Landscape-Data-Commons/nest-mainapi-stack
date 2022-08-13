import { Test, TestingModule } from '@nestjs/testing';
import { DatagapController } from './datagap.controller';
import { DatagapService } from './datagap.service';

describe('DatagapController', () => {
  let controller: DatagapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatagapController],
      providers: [DatagapService],
    }).compile();

    controller = module.get<DatagapController>(DatagapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
