import { Prisma, PrismaClient } from '@prisma/client';
import { IReturnType } from 'v1/types/common';
const prisma = new PrismaClient();

export const create = async (
  createInput: Prisma.UsersCreateInput
): Promise<IReturnType> => {
  try {
    const user = await prisma.users.create({
      data: createInput,
    });
    if (user) {
      return { success: true, data: { resData: user } };
    }
    return { success: false, data: { resData: {} } };
  } catch (error) {
    return { success: false, data: { resData: {} }, error };
  }
};
