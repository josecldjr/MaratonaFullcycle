import { Controller, Get, Render, Post, Body, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Lesson } from './entity/lesson.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('maratona')
  @Render('index')
  async getHello() {
    const { count, list } = await this.appService.list()

    return {
      message: 'Hellow',
      lessons: list
    };
  }

  @Get('maratona/:id')
  @Render('lesson-modal.hbs')
  async lessonModal(@Param('id') id: number) {

    let lesson = new Lesson()
 
    if (id) {
      lesson = await this.appService.get(id)  
    }


    return {
      lesson
    }
  }

  @Post()
  saveLesson(@Body() data: Lesson) {    
    return this.appService.save(data)
  }

  @Delete(':id')
  deleteLesson(@Param('id') id: number) {
    return this.appService.delete(id)
  }


}
