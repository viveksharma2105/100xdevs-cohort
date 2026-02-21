import express from "express";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const client = new PrismaClient({ adapter });

app.get("/users", async (req, res) => {
  const users = await client.user.findMany();
  res.json({
    users,
  });
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const users = await client.user.findFirst({
    where: {
      id: parseInt(id)
    }
   
  });
  res.json({
    users,
  });
});

app.listen(3000);
// async function createUser() {
//   await client.user.create({
//     data: {
//       username: "vivek",
//       password: "123123",
//       age: 21,
//     },
//   });

//  await client.user.update({
//     where: {
//       username: "vivek",
//     },
//     data: {
//       age: 22,
//     },
//   });
// }

// createUser();
