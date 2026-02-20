import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const client = new PrismaClient({ adapter });
async function createUser() {
    await client.user.create({
        data: {
            username: "vivek",
            password: "123123",
            age: 21
        }
    });
}
createUser();
//# sourceMappingURL=index.js.map