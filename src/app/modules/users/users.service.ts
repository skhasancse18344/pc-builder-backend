import { PrismaClient, Users } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (data: Users): Promise<Users> => {
  const newUser = await prisma.users.create({
    data,
  });
  return newUser;
};

const getAllUsers = async () => {
  const users = await prisma.users.findMany();
  return users;
};

const getSingleUser = async (id: string): Promise<Users | null> => {
  const user = await prisma.users.findUnique({
    where: {
      id,
    },
  });
  return user;
};
export const UserService = {
  createUser,
  getAllUsers,
  getSingleUser,
};
