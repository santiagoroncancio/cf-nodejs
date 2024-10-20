import { Module } from '@nestjs/common';
import {TasksModule} from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule, ProjectsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
