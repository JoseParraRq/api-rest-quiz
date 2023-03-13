import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm'
import { UserLoginDto } from './dto/login.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private jwtService:JwtService,
        @InjectRepository(Users) private userRepository: Repository<Users>
    ) { }

    async login(loginUser: UserLoginDto) {
        try {
            const { email, password } = loginUser;
            const userFound = await this.userRepository.findOne({
                where: {
                    email: email
                }
            });

            if (!userFound) {
                const exception = new HttpException(
                    'this email do not be Register',
                    HttpStatus.NOT_FOUND,
                );
                return {
                    response: exception
                };
            }

            const checkPassword = await compare(password, userFound.password)
            if (!checkPassword) {
                const exception = new HttpException(
                    'this password is incorrect',
                    HttpStatus.NOT_FOUND,
                );
                return {
                    response: exception
                };
            }

            // const jwtService = new JwtService;

            const payload = {
                id:userFound,
                userName:userFound.userName
            }
            console.log("here the payload===>>",payload);

            // const token =  jwtService.sign(payload)
            const token =  this.jwtService.sign(payload)

            console.log("the token===>",token);
            
            const data = {
                user:userFound,
                token: token
            };
            console.log("here the datatoken===>>",data);
            
            return data;

        } catch (error) {

        }
    }
}
