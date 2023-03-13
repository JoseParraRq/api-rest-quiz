import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import {Repository} from 'typeorm'
import { CreateUserDto } from './entity/dto/create-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private userRepository:Repository<Users>){}

        async createUser(createUser:CreateUserDto){
            try {
                const { email,password } = createUser;
                const userFound = await this.userRepository.findOne({
                    where:{
                        email:email
                    }
                });

                if (userFound){
                    const exception = new HttpException(
                        'this email already exist',
                        HttpStatus.BAD_REQUEST,
                    );
                    return {
                        response: exception
                    };
                }
                const plainToHash = await hash(password,10);

                createUser={ ...createUser,password:plainToHash};

                return this.userRepository.save(createUser)
                
            } catch (error) {
                
            }
        }
}
