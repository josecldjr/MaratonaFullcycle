import { Injectable, Render } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Lesson } from './entity/lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {

  constructor(@InjectRepository(Lesson) private readonly lessonRepository: Repository<Lesson>) { }

  @Render('index')
  async list(): Promise<{ list: Lesson[], count: number }> {
    const [list, count] = await this.lessonRepository.findAndCount()

    return {
      list,
      count,
    }
  }

  async save(data: Lesson): Promise<Lesson> {
    let _data = { ...data }

    if (!data.id) {
      delete _data.id
    } else {
      _data.id = parseInt(_data.id.toString())
    }

    return this.lessonRepository.save(_data)
  }

  async get(id: number): Promise<Lesson> {
    return this.lessonRepository.findOne(id)
  }

  async delete(id: number): Promise<void> {
    await this.lessonRepository.delete(id)
  }
}
