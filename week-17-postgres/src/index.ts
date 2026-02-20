import { Client } from "../node_modules/@types/pg/index.js";

const pgClient = new Client({
  connectionString: "postgresql://postgres:postgres123@localhost:5432/test_db",
});

async function main() {
  try {
    await pgClient.connect();
    console.log("Connected to DB");

    // ---- CREATE USERS TABLE ----
    await pgClient.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE
      );
    `);

    // ---- CREATE TODO TABLE ----
    await pgClient.query(`
      CREATE TABLE IF NOT EXISTS todo (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description TEXT,
        done BOOLEAN DEFAULT false
      );
    `);

    console.log("Tables created");

    // ---- INSERT DATA INTO USERS ----
    const insertUser = await pgClient.query(
      "INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *",
      ["vivek", "vivek@email.com"],
    );

    console.log("Inserted User:", insertUser.rows);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await pgClient.end();
    console.log("Connection closed");
  }
}

main();


////This is how we can use pg client to connect to DB and perform CRUD operations. However, writing raw SQL queries can be error-prone and can lead to security vulnerabilities like SQL Injection if not done carefully. That's why we use ORMs like Prisma which provide a safer and more convenient way to interact with the database.
// import express from "express";
// import { Client } from "pg";

// const app = express();
// app.use(express.json());

// const pgClient = new Client({});

// app.post("/signup", async (req, res) => {
//   const username = req.body.username;
//   const email = req.body.email;
//   const password = req.body.password;

//// worst way to insert data into DB (vulnerable to SQL Injection)
//// const insertQuery = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`
//// const result = await pgClient.query(insertQuery);

//// best way to insert data into DB (using parameterized queries)
// const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
// const result = await pgClient.query(insertQuery, [username, email, password]);
//   res.json({ message: "User created" });
// });











////In Trasaction (BEGIN,Queries , COMMIT)
// app.post("/signup", async (req, res) => {
//   const username = req.body.username;
//   const email = req.body.email;
//   const password = req.body.password;

//   try {
//     await pgClient.query("BEGIN"); // Start transaction

//     const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
//     await pgClient.query(insertQuery, [username, email, password]);
//    const result = await pgClient.query("SELECT * FROM users WHERE email = $1", [email]);


//     await pgClient.query("COMMIT"); // Commit transaction
//     res.json({ message: "User created", user: result.rows[0] });
//   } catch (err) {
//     await pgClient.query("ROLLBACK"); // Rollback transaction on error
//     console.error("Error:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });





////JOIN
// app.get("/users-with-addresses", async (req, res) => {
//   try {
//     const result = await pgClient.query(`
//       SELECT users.username, users.email, addresses.city, addresses.state
//       FROM users
//       JOIN addresses ON users.id = addresses.user_id  //// Assuming addresses table has a foreign key user_id referencing users.id
//     `);
//     res.json(result.rows);
//   } catch (err) {
//     console.error("Error:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
