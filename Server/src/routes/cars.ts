import { Router, Response, Request } from "express";
import getCars from "../services/getCars";
import getCarById from "../services/getCarById";
import { PrismaClient } from "@prisma/client";

// Initializing the router
export default (prisma: PrismaClient) => {
  const router = Router(); // Create a new router instance

  //Get all cars
  router.get("/", async (req: Request, res: Response) => {
    try {
      console.log(req.query);
      const cars = await getCars(prisma);
      // If no cars are found, return a 404 status
      if (!cars || cars.length === 0) {
        res.status(404).json({ error: "No cars found" });
      }
      // If cars are found, return them
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  //Get car by id
  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const car = await getCarById(prisma, id);
      // If no car is found, return a 404 status
      if (!car) {
        res.status(404).json({ error: "Car not found" });
      }
      // If car is found, return it
      res.status(200).json(car);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  //Return the router
  return router;
};
