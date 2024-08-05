import { PrismaClient } from '@prisma/client';
import { userRoleTypes } from '../../src/v1/types/users';
const prisma = new PrismaClient();
const rolesData = [
  {
    id: userRoleTypes.Admin.value,
    name: 'Admin',
    status: 1,
  },
  {
    id: userRoleTypes.User.value,
    name: 'User',
    status: 1,
  },
];

const createdRoles = await prisma.roles.createMany({
  data: rolesData,
  skipDuplicates: true,
});

console.log('Seeds created for Roles:', createdRoles);
