import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CocktailsService } from './cocktails.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateCocktailDto } from './entity/dto/createCocktail.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('cocktails')
@UseGuards(JwtAuthGuard)
@Controller('cocktails')
export class CocktailsController {

    constructor(private cocktailService: CocktailsService) {}
     
    @Get(':cocktail')
    async getDataFromExternalApi(@Param('cocktail') cocktail:string) {
      return this.cocktailService.findDrinks(cocktail);
    }

    @Post()
    createUser(@Body() createCocktail: CreateCocktailDto) {
        return this.cocktailService.createCocktail(createCocktail);
    }

    @Get(':id')
    async getCocktailsByUserId(@Param('id') id:number) {
      return this.cocktailService.getCocktailsByUserId(id);
    }

    }
   



 
