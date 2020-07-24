import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm"
import { text } from "express"

@Entity({schema: 'lesson'})
export class Lesson {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({type: 'varchar', length: 300})
  name: string

  @Column({type: 'text'})
  description: string

  @Column({type: 'date'})
  date: Date

  @Column({type: 'text' })
  link: string

  @Column({type: 'text'})
  thumb: string
}