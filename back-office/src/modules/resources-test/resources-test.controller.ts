import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResourcesTestService } from './resources-test.service';
import { CreateResourcesTestDto } from './dto/create-resources-test.dto';
import { UpdateResourcesTestDto } from './dto/update-resources-test.dto';

@Controller('resources-test')
export class ResourcesTestController {
  constructor(private readonly resourcesTestService: ResourcesTestService) {}

  @Post()
  create(@Body() createResourcesTestDto: CreateResourcesTestDto) {
    return this.resourcesTestService.create(createResourcesTestDto);
  }

  @Get()
  findAll() {
    return this.resourcesTestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourcesTestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResourcesTestDto: UpdateResourcesTestDto) {
    return this.resourcesTestService.update(+id, updateResourcesTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourcesTestService.remove(+id);
  }
}
