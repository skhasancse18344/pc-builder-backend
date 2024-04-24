import { Components, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createComponent = async (data: Components): Promise<Components> => {
  const result = await prisma.components.create({
    data,
    include: {
      categories: true,
      reviews: true,
    },
  });
  return result;
};

const getComponents = async (): Promise<Components[]> => {
  const result = await prisma.components.findMany({
    include: {
      categories: true,
      reviews: true,
    },
  });
  return result;
};
const getComponentById = async (id: string): Promise<Components | null> => {
  const result = await prisma.components.findUnique({
    where: {
      id,
    },
    include: {
      categories: true,
      reviews: true,
    },
  });
  return result;
};
const updateComponent = async (
  id: string,
  data: Components
): Promise<Components> => {
  const result = await prisma.components.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
const deleteComponents = async (id: string): Promise<Components> => {
  const result = await prisma.components.delete({
    where: {
      id,
    },
  });
  return result;
};

export const componentService = {
  createComponent,
  getComponents,
  getComponentById,
  updateComponent,
  deleteComponents,
};
