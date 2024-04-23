import { Categories, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createCategory = async (data: Categories): Promise<Categories> => {
  const result = await prisma.categories.create({
    data,
  });
  return result;
};

const getCategories = async (): Promise<Categories[]> => {
  const result = await prisma.categories.findMany();
  return result;
};

const getCategoryById = async (id: string): Promise<Categories | null> => {
  const result = await prisma.categories.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateCategory = async (
  id: string,
  data: Categories
): Promise<Categories | null> => {
  const result = await prisma.categories.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteCategory = async (id: string): Promise<Categories | null> => {
  const result = await prisma.categories.delete({
    where: {
      id,
    },
  });
  return result;
};

export const categoryService = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
