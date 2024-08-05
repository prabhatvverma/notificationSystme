import { ICommonResourceProperties } from './common';

export interface IUser extends ICommonResourceProperties {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verified: boolean;
}

export const userRoleTypes = {
  Admin: {
    value: 1,
    name: 'Admin',
  },
  User: {
    value: 2,
    name: 'User',
  },
};
