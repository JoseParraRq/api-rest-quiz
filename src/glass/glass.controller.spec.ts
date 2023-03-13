import { Test, TestingModule } from '@nestjs/testing';
import { GlassController } from './glass.controller';

describe('GlassController', () => {
  let controller: GlassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GlassController],
    }).compile();

    controller = module.get<GlassController>(GlassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
