export type CreateLaunchDTO = {
  id: number;
  date: string;
  endTime: string;
  startTime: string;
  projectName: string;
  projectType: string;
  internal: boolean;
  working: boolean;
  description: string;
  launchedAt: string;
  employeeId: number;
  companyId: number;
};
