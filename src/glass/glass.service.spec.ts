import { Test, TestingModule } from '@nestjs/testing';
import { GlassService } from './glass.service';

describe('GlassService', () => {
  let service: GlassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlassService],
    }).compile();

    service = module.get<GlassService>(GlassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
