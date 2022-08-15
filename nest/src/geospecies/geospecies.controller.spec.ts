import { Test, TestingModule } from '@nestjs/testing';
import { GeospeciesController } from './geospecies.controller';
import { GeospeciesService } from './geospecies.service';

describe('GeospeciesController', () => {
  let controller: GeospeciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeospeciesController],
      providers: [GeospeciesService],
    }).compile();

    controller = module.get<GeospeciesController>(GeospeciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
