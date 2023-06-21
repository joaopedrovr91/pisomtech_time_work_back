import { AddressDTO } from '@modules/address/dto/create-address.dto';
import { CreateCompanyDTO } from '@modules/company/dto/create-company.dto';
import { CreateLaunchDTO } from '@modules/launch/dto/create-launch.dto';
import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsPositive, IsString } from 'class-validator';

export class EmployeeDTO {
  @IsNumber()
  @IsPositive()
  id: number;
  @IsDate()
  @Transform(({ value }) => new Date(value))
  birthday?: Date;

  @IsString()
  imgEmployee?: string;

  phoneNumber: string;

  launches?: CreateLaunchDTO[];

  userCompanies?: CreateCompanyDTO[];
  
  address?: AddressDTO[];
};
