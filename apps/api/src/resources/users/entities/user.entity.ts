import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "../../models/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { Todo } from "../../todos/entities/todo.entity";

@Entity("users")
export class User extends BaseEntity {
  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty({required: false})
  @Column()
  age?: number;

  @ApiProperty()
  @OneToMany (() => Todo, todo => todo.user)
  todos: Todo[]
}