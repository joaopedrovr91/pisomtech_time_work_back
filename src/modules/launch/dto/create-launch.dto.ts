import { CreateProjectDTO } from '@modules/project/dto/create-project.dto';
import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsPositive, IsString, IsBoolean } from 'class-validator';

export class CreateLaunchDTO  {
  id: number;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  date: Date;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  endTime: Date;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  startTime: Date;

  @IsNumber()
  @IsPositive()
  projectId?: number;

  @IsBoolean()
  internal: boolean;

  @IsString()
  description: string;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  launchedAt: Date;

  @IsNumber()
  @IsPositive()
  employeeId: number;

  @IsNumber()
  @IsPositive()
  companyId: number;
};
