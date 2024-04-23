import { PrismaClient, Users } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (data: Users): Promise<Users> => {
  const newUser = await prisma.users.create({
    data,
  });
  return newUser;
};
export const UserService = {
  createUser,
};
