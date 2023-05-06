import { Test, TestingModule } from '@nestjs/testing';
import { PrismahelperService } from './prismahelper.service';

describe('PrismahelperService', () => {
  let service: PrismahelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismahelperService],
    }).compile();

    service = module.get<PrismahelperService>(PrismahelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
