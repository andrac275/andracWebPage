import { Module } from '@nestjs/common';

import { TasksModule } from './modules/tasks/tasks.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
})
export class AppModule {}
