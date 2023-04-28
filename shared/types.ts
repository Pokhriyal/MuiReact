export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  permissionLevel: PermissionLevel;
  shops: string[];
}

export type Employees = Employee[];

export type PermissionLevel = 'Master Admin' | 'Shop Admin' | 'Employee';

export type PermissionLevels = PermissionLevel[];

export type Shop = string;

export type Shops = Shop[];
