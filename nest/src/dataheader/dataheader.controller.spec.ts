import { Test, TestingModule } from '@nestjs/testing';
import { DataheaderController } from './dataheader.controller';
import { DataheaderService } from './dataheader.service';

describe('DataheaderController', () => {
  let controller: DataheaderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataheaderController],
      providers: [DataheaderService],
    }).compile();

    controller = module.get<DataheaderController>(DataheaderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
