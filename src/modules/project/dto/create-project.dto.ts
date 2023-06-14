import { CreateEmployeeProjectDto } from '@modules/employee-project/dto/create-employee-project.dto';
import { CreateLaunchDTO } from '@modules/launch/dto/create-launch.dto';

export type CreateProjectDTO = {
  id: number;
  projectName: string;
  projectType: string;
  Employees: CreateEmployeeProjectDto[];
  Launch: CreateLaunchDTO[];
  companyId: number;
};
