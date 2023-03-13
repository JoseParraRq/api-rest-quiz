import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Cocktails } from './entity/cocktails.entitiy';
import { RemoveOptions, Repository, SaveOptions } from 'typeorm';
import { CreateCocktailDto } from './entity/dto/createCocktail.dto';
import { Category } from 'src/category/category.entity';
import { Glass } from 'src/glass/glass.entity';
import { Users } from 'src/users/entity/users.entity';
// import { ApiExtrenalService } from 'src/api-extrenal/api-extrenal.service';

@Injectable()
export class CocktailsService {
    constructor(@InjectRepository(Cocktails) private cocktailsRepository: Repository<Cocktails>,
        @InjectRepository(Category) private categoryRepository: Repository<Category>,
        @InjectRepository(Glass) private glassRepository: Repository<Glass>,
        @InjectRepository(Users) private userRepository: Repository<Users>) { }

    async findDrinks(cocktail: string) {
        try {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);
            const result = response.data.drinks;
            if (typeof result === 'undefined' || result === null) {
                const exception = new HttpException(
                    'This cocktail name is incorrect or does not exist in our inventory.',
                    HttpStatus.NOT_FOUND,
                );
                return {
                    response: exception
                };
                // throw new HttpException('This cocktail name is incorrect or does not exist in our inventory.', HttpStatus.NOT_FOUND);
            } else {
                const mapResult = result.map((e: any) => {
                    return {
                        drinkName: e.strDrink,
                        tags: e.strTags,
                        instructions: e.strInstructions,
                        glassData: e.strGlass,
                        category: e.strCategory
                    }
                })
                return {
                    msg: "Query executed successfully",
                    response: mapResult,
                    status: true
                }
            }
        } catch (error) {
            console.log(error);
            return {
                error: `an internal error has occurred ${error}`
            }
        }
    }

    async createCocktail(createCocktail: CreateCocktailDto) {

        try {
            const { name,
                //  category,
                //   glass,
                user
            } = createCocktail;

            const getDrink = await this.findDrinks(name)

            if (getDrink?.response?.status === 404) {
                console.log("here the getData", getDrink);
                return getDrink;
            }

            if (getDrink.response.length > 1) {
                const exception = new HttpException(
                    'Please specify the name of a specific cocktail',
                    HttpStatus.NOT_FOUND,
                );
                return {
                    response: exception
                };
            }

            const category = getDrink.response[0].category;
            const glass = getDrink.response[0].glassData;

            const getCategoryForFront = await this.categoryRepository.findOne({
                where: {
                    name: category
                }
            });

            const getGlassForFront = await this.glassRepository.findOne({
                where: {
                    name: glass
                }
            });

            const findUser = await this.userRepository.findOne({
                where: {
                    id: user
                }
            });

            if (!findUser) {
                const exception = new HttpException(
                    'This user is incorrect or does not exist in our database.',
                    HttpStatus.BAD_REQUEST,
                );
                return {
                    response: exception
                };
            }
            const nameCocktail: string = getDrink.response[0].drinkName;

            const cocktail = {
                name: nameCocktail,
                category: getCategoryForFront,
                glass: getGlassForFront,
                user: findUser
            }

            console.log("cocktail", cocktail);
            return this.cocktailsRepository.save(cocktail)

        } catch (error) {

        }
    }

    async getCocktailsByUserId(id: number) {
        try {

        } catch (error) {

        }
    }
}
