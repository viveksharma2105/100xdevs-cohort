import { Client } from "pg";
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
        const insertUser = await pgClient.query("INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *", ["vivek", "vivek@email.com"]);
        console.log("Inserted User:", insertUser.rows);
    }
    catch (err) {
        console.error("Error:", err);
    }
    finally {
        await pgClient.end();
        console.log("Connection closed");
    }
}
main();
//# sourceMappingURL=index.js.map