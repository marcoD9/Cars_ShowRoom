import express from "express";
import "dotenv/config";
import carsRouter from "./routes/cars";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/cars", carsRouter(prisma));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

if (process.env.NODE_ENV === "production") {
  process.on("beforeExit", async () => {
    await prisma.$disconnect();
  });
}
