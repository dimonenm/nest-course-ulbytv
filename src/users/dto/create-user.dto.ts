import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'email адрес' })
  readonly email: string;

  @ApiProperty({ example: 'qwerty', description: 'Пароль' })
  readonly password: string;
}