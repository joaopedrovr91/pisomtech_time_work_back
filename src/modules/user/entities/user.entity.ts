import { EmployeeDTO } from "@modules/employee/dto/employee.dto";
import { CreateLaunchDTO } from "@modules/launch/dto/create-launch.dto";

export class User {
    id?: string;
    name: string;
    email: string;
    password: string;
    admin: boolean;
    employee?: EmployeeDTO;
  }