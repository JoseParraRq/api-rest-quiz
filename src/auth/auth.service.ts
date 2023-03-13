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
            const { email, password } = loginUser;
            const userFound = await this.userRepository.findOne({
                where: {
                    email: email
                }
            });

            if (!userFound) {
                throw new HttpException(
                    'this email do not be Register',
                    HttpStatus.NOT_FOUND,
                );
              
            }

            const checkPassword = await compare(password, userFound.password)
            if (!checkPassword) {
                throw  new HttpException(
                    'this password is incorrect',
                    HttpStatus.NOT_FOUND,
                );
              
            }

            // const jwtService = new JwtService;

            const payload = {
                id:userFound,
                userName:userFound.userName
            }

            // const token =  jwtService.sign(payload)
            const token =  this.jwtService.sign(payload)

            
            const data = {
                user:userFound,
                token: token
            };
            
            return data;
    }
}
