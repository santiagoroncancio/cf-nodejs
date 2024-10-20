import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {TasksService} from "./tasks.service";

@Controller('tasks')
export class TasksController {
    tasksService: TasksService;

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }

    @Get()
    getAllTasks(@Query() query:any){
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    showTask(@Param('id') id:string){
        return this.tasksService.showTask(parseInt(id));
    }

    @Post()
    storeTask(@Body() task:any){
        return this.tasksService.storeTask(task);
    }

    @Put()
    updateTask(){
        return 'actualizando tarea';
    }

    @Delete()
    deleteTask(){
        return 'eliminando tarea';
    }

    @Patch()
    updateTaskStatus(){
        return 'actualizando tarea parcialmente';
    }
}