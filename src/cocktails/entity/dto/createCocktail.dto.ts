import { ApiProperty } from "@nestjs/swagger";
import { IsInt,IsString,MinLength,MaxLength,IsNotEmpty,IsEmail, IsNumber} from "class-validator";

export class CreateCocktailDto {

    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(250)
    @IsNotEmpty()
    name: string;
  
    // @ApiProperty()
    // @IsNumber()
    // @IsNotEmpty()
    // @MinLength(4)
    // @MaxLength(10)
    // category: number;

    // @ApiProperty()
    // @IsNumber()
    // @IsNotEmpty()
    // @MinLength(4)
    // @MaxLength(10)
    // glass: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(10)
    user: number;
    
  }
  