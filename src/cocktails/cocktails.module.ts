import { Module } from '@nestjs/common';
import { CocktailsController } from './cocktails.controller';
import { CocktailsService } from './cocktails.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cocktails } from './entity/cocktails.entitiy';
import { Category } from 'src/category/category.entity';
import { Glass } from 'src/glass/glass.entity';
import { Users } from 'src/users/entity/users.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Cocktails,Category,Glass,Users])
  ],
  controllers: [CocktailsController],
  providers: [CocktailsService]
})
export class CocktailsModule {}
