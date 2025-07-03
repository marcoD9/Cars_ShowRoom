import { PrismaClient } from "@prisma/client";

const getCars = async (prisma: PrismaClient) => {
  const cars = await prisma.car.findMany({});
  return cars;
};

export default getCars;
