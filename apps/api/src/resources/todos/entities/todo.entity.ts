import { Column, Entity, ManyToOne } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "../../models/base.entity";
import { User } from "../../users/entities/user.entity";

@Entity("todos")
export class Todo extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50 })
  title: string;

  @ApiProperty({required: true})
  @Column({ length: 200 })
  description: string;

  @ManyToOne(() => User, user => user.todos)
  user: User

  @ApiProperty()
  @Column()
  userId: number
}
