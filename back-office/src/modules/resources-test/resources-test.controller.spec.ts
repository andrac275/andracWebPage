import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesTestController } from './resources-test.controller';
import { ResourcesTestService } from './resources-test.service';

describe('ResourcesTestController', () => {
  let controller: ResourcesTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourcesTestController],
      providers: [ResourcesTestService],
    }).compile();

    controller = module.get<ResourcesTestController>(ResourcesTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
