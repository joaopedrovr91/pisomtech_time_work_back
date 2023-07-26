import { UserService } from '@modules/user/user.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './strategies/error/unauthorized.error';
import { User } from '@modules/user/entities/user.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';
import { LoginRequestBody } from './models/LoginRequestBody';

@Injectable()
export class AuthService {
    constructor (private readonly userService: UserService, private readonly jwtService: JwtService) {}

    async login(req: LoginRequestBody): Promise<UserToken> {
        const user = await this.validateUser(req.email, req.password)
        const payload: UserPayload = {
            sub: user.id,
            email: user.email,
            admin: user.admin,
            name: user.name
        };

        const jwtToken = this.jwtService.sign(payload);

        return {
            access_token: jwtToken,
        }
    }

    async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email);

        if(user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if(isPasswordValid) {
                return {
                    ...user,
                    password: undefined,
                };
            }
        }

        throw new UnauthorizedError(
            'Email address or password provided is incorrect.',
          );
    }
}
