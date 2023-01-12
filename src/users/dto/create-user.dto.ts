import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'email адрес' })
  @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, {message: 'Не корректный email'})
  readonly email: string;

  @ApiProperty({ example: 'qwerty', description: 'Пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'не менее 4 не более 16 ' })
  readonly password: string;
}