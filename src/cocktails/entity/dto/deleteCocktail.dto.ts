import { ApiProperty } from "@nestjs/swagger";
import { IsInt,IsString,MinLength,MaxLength,IsNotEmpty,IsEmail, IsNumber} from "class-validator";

export class DeleteCocktailDto {

    @ApiProperty()
    @IsNumber()
    @MinLength(1)
    @MaxLength(250)
    @IsNotEmpty()
    userId: number;
  
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
    @MinLength(1)
    @MaxLength(10)
    cocktailId: number;
    
  }
  