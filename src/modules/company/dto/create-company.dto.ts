import { CreateLaunchDTO } from '@modules/launch/dto/create-launch.dto';
import { CreateUserCompanyDTO } from '@modules/user-company/dto/create-user-company.dto';

export type CreateCompanyDTO = {
  id: number;
  name: string;
  imgPath: string;
  email: string;
  phoneNumber: string;
  launches: CreateLaunchDTO[];
  companyUsers: CreateUserCompanyDTO[];
};
