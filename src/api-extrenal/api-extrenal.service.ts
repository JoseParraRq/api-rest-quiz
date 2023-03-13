// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import axios from 'axios';

// @Injectable()
// export class ApiExtrenalService {
//     constructor() { }
//     async findDrinks(cocktail: string) {
//         try {
//             const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);
//             const result = response.data.drinks;
//             if (typeof result === 'undefined' || result === null) {
//                 const exception = new HttpException(
//                     'This cocktail name is incorrect or does not exist in our inventory.',
//                     HttpStatus.NOT_FOUND,
//                 );
//                 return {
//                     response: exception
//                 };
//                 // throw new HttpException('This cocktail name is incorrect or does not exist in our inventory.', HttpStatus.NOT_FOUND);
//             } else {
//                const mapResult =  result.map((e:any)=>{
//                     return{
//                     drinkName: e.strDrink,
//                     tags:e.strTags,
//                     instructions:e.strInstructions,
//                     glassData:e.strGlass,
//                     category:e.strCategory
//                     }
//                 })
//                 return {
//                     msg: "Query executed successfully",
//                     response: mapResult,
//                     status: true
//                 }
//             }
//         } catch (error) {
//             console.log(error);
//             return {
//                 error: `an internal error has occurred ${error}`
//             }
//         }
//     }
// }
