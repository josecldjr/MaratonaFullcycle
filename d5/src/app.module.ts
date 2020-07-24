import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entity/lesson.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      entities: [Lesson],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Lesson])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
