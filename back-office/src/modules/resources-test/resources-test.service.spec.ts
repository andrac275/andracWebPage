import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesTestService } from './resources-test.service';

describe('ResourcesTestService', () => {
  let service: ResourcesTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcesTestService],
    }).compile();

    service = module.get<ResourcesTestService>(ResourcesTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
