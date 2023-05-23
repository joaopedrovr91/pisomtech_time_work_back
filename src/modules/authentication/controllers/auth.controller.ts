import { Controller } from '@nestjs/common';
import { AuthenticationUseCase } from '../usecases/authenticate/authenticate.usecase';

@Controller('auth')
export class AuthController {
  constructor(private authenticationUseCase: AuthenticationUseCase) {}
}
