import { CreateLaunchDTO } from '@modules/launch/dto/create-launch.dto';
import { CreateUserCompanyDTO } from '@modules/user-company/dto/create-user-company.dto';

export type CreateUserDTO = {
  id: number;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  launches: CreateLaunchDTO[];
  userCompanies: CreateUserCompanyDTO[];
};
