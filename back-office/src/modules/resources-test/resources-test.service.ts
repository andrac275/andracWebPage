import { Injectable } from '@nestjs/common';
import { CreateResourcesTestDto } from './dto/create-resources-test.dto';
import { UpdateResourcesTestDto } from './dto/update-resources-test.dto';

@Injectable()
export class ResourcesTestService {
  create(createResourcesTestDto: CreateResourcesTestDto) {
    return 'This action adds a new resourcesTest';
  }

  findAll() {
    return `This action returns all resourcesTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resourcesTest`;
  }

  update(id: number, updateResourcesTestDto: UpdateResourcesTestDto) {
    return `This action updates a #${id} resourcesTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} resourcesTest`;
  }
}
