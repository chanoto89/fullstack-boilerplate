import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, Matches, MaxLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  @Matches(/^[a-zA-Z0-9 ]*$/, {
    message: 'Only alphanumeric characters and spaces are allowed',
  })
  @MaxLength(20)
  name: string;

  @ApiProperty({required: false})
  @IsNumber()
  age?: number;
}