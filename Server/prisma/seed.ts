import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seeding process...");

  const jsonUrl = "https://cars-hosting.netlify.app/cars.json";

  try {
    const response = await fetch(jsonUrl);
    if (!response.ok) {
      throw new Error(
        `Error retrieving JSON: ${response.status} ${response.statusText}. Please ensure the URL is correct and the file is public on Netlify.`
      );
    }
    const carsData = await response.json();

    for (const car of carsData) {
      // Use upsert to avoid duplicates if the script is run multiple times.
      await prisma.car.upsert({
        where: { id: car.id }, // Use 'id' directly. If your JSON 'id' is not a string, this will fail.
        update: {
          model: car.model, // Map JSON 'model' to Prisma 'name'
          year: car.year,
          color: car.color,
          description: car.description,
          url: car.url, // Map JSON 'url' to Prisma 'imageUrl'
          price: car.price,
        },
        create: {
          id: car.id, // Pass the 'id' string from JSON
          model: car.model, // Map JSON 'model' to Prisma 'name'
          year: car.year,
          color: car.color,
          description: car.description,
          url: car.url, // Map JSON 'url' to Prisma 'imageUrl'
          price: car.price,
        },
      });
      console.log(`Processed car: ${car.model}`); // Use car.model for logging as per your JSON
    }
    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1); // Exit with an error code if seeding fails
  } finally {
    await prisma.$disconnect(); // Ensure Prisma client is disconnected at the end
  }
}

main(); // Start the main seeding function
