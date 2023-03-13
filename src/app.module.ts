import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocktailsModule } from './cocktails/cocktails.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ApiExtrenalModule } from './api-extrenal/api-extrenal.module';
import { UsersModule } from './users/users.module';
import { Users } from './users/entity/users.entity';
import { CategoryModule } from './category/category.module';
import { GlassModule } from './glass/glass.module';
import { Category } from './category/category.entity';
import { Glass } from './glass/glass.entity';
import { Cocktails } from './cocktails/entity/cocktails.entitiy';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'the_cocktail_db',
    synchronize: true,
    logging: true,
    entities: [
      Users,
      Category,
      Glass,
      Cocktails
    ],
    
  }),CocktailsModule,
  //  ApiExtrenalModule,
    UsersModule,
     CategoryModule,
      GlassModule,
       AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
