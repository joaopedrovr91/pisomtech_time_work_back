import { CreateProjectDTO } from '@modules/project/dto/create-project.dto';

export type CreateLaunchDTO = {
  id: number;
  date: string;
  endTime: string;
  startTime: string;
  projectId?: number;
  internal: boolean;
  description: string;
  launchedAt: string;
  employeeId: number;
  companyId: number;
};
