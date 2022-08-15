import { Test, TestingModule } from '@nestjs/testing';
import { GeospeciesService } from './geospecies.service';

describe('GeospeciesService', () => {
  let service: GeospeciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeospeciesService],
    }).compile();

    service = module.get<GeospeciesService>(GeospeciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
