export type CreateLaunchDTO = {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  projectName: string;
  projectType: string;
  internal: boolean;
  working: boolean;
  description: string;
  launchedAt: string;
  userId: number;
  companyId: number;
};
