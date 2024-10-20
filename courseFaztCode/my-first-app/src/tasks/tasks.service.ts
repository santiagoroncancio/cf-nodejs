import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateTaskDto} from "./dto/create-task.dto";

@Injectable()
export class TasksService {
    private tasks = [];

    getTasks() {
        return this.tasks;
    }

    storeTask(Task: CreateTaskDto){
        this.tasks.push({
            id: this.tasks.length + 1,
            ...Task,
        });
        return Task;
    }

    showTask(id: number){
        const task = this.tasks.find(task => task.id === id);

        if(!task){
            return new NotFoundException('Task with id ' + id + ' does not exist');
        }

        return task;
    }

}
