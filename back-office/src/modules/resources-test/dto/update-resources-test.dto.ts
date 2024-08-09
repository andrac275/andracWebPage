import { PartialType } from '@nestjs/mapped-types';
import { CreateResourcesTestDto } from './create-resources-test.dto';

export class UpdateResourcesTestDto extends PartialType(CreateResourcesTestDto) {}
