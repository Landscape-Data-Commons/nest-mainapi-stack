import { Test, TestingModule } from '@nestjs/testing';
import { TblSchemaController } from './tbl-schema.controller';
import { TblSchemaService } from './tbl-schema.service';

describe('TblSchemaController', () => {
  let controller: TblSchemaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TblSchemaController],
      providers: [TblSchemaService],
    }).compile();

    controller = module.get<TblSchemaController>(TblSchemaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
