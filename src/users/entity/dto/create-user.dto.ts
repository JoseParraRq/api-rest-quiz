import { ApiProperty } from "@nestjs/swagger";
import { IsInt,IsString,MinLength,MaxLength,IsNotEmpty,IsEmail} from "class-validator";

export class CreateUserDto {

    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(250)
    @IsNotEmpty()
    userName: string;
  
    @ApiProperty()
    @IsEmail()
    @MinLength(4)
    @MaxLength(50)
    @IsNotEmpty()
    email: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(10)
    password: string;
    
  }
  