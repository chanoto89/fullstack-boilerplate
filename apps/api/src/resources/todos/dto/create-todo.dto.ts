import { ApiProperty } from "@nestjs/swagger";
import { MaxLength } from "class-validator";

export class CreateTodoDto {
  @ApiProperty()
  @MaxLength(50)
  title: string;

  @ApiProperty()
  @MaxLength(200)
  description: string;
}
