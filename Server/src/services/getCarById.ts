import { PrismaClient } from "@prisma/client";

const getCarById = async (prisma: PrismaClient, id: string) => {
  const car = await prisma.car.findUnique({ where: { id } });

  return car;
};

export default getCarById;
