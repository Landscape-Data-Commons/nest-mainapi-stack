import { Test, TestingModule } from '@nestjs/testing';
import { GroupmiddlewareService } from './groupmiddleware.service';

describe('GroupmiddlewareService', () => {
  let service: GroupmiddlewareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupmiddlewareService],
    }).compile();

    service = module.get<GroupmiddlewareService>(GroupmiddlewareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
