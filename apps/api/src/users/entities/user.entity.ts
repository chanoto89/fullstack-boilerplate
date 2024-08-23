import { ApiProperty } from "@nestjs/swagger";

export class User {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty({required: false})
  age?: number;
}