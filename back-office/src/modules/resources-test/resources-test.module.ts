import { Module } from '@nestjs/common';
import { ResourcesTestService } from './resources-test.service';
import { ResourcesTestController } from './resources-test.controller';

@Module({
  controllers: [ResourcesTestController],
  providers: [ResourcesTestService]
})
export class ResourcesTestModule {}
