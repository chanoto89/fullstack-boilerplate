import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsNumber, isPositive, MaxLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(20)
  name: string;

  @ApiProperty({required: false})
  @IsNumber()
  age?: number;
}