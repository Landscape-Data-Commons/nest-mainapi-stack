import { Test, TestingModule } from '@nestjs/testing';
import { DataspeciesinventoryController } from './dataspeciesinventory.controller';
import { DataspeciesinventoryService } from './dataspeciesinventory.service';

describe('DataspeciesinventoryController', () => {
  let controller: DataspeciesinventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataspeciesinventoryController],
      providers: [DataspeciesinventoryService],
    }).compile();

    controller = module.get<DataspeciesinventoryController>(DataspeciesinventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
