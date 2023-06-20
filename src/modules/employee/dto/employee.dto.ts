import { AddressDTO } from '@modules/address/dto/create-address.dto';
import { CreateCompanyDTO } from '@modules/company/dto/create-company.dto';
import { CreateLaunchDTO } from '@modules/launch/dto/create-launch.dto';

export type EmployeeDTO = {
  id: number;
  birthday?: string;
  imgEmployee?: string;
  launches?: CreateLaunchDTO[];
  userCompanies?: CreateCompanyDTO[];
  address?: AddressDTO[];
};
