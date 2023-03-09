import conn from "./src/back/db/conn";
import User from "./src/back/Model/User";

User;

conn.sync({ force: true }).finally(() => {
  console.log("Database & tables created!");
});
