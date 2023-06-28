import { EmployeeDTO } from '@modules/employee/dto/employee.dto';
import { CreateLaunchDTO } from '@modules/launch/dto/create-launch.dto';
import {
  IsBoolean,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  isBoolean,
} from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDTO extends User {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
  
  @IsBoolean()
  admin: boolean;

  launches: CreateLaunchDTO[];
  employee: EmployeeDTO;
};
