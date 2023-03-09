import { Sequelize } from "sequelize";
let config;
if (process.argv[2] == "--force") {
  config = require("../configForce");
} else {
  config = require("../config");
}
const { dbhost, dbschema, dbuser, dbpassword } = config;
const conn = new Sequelize(dbschema, dbuser, dbpassword, {
  host: dbhost,
  dialect: "mysql",
  logging: true,
  define: {
    timestamps: false,
  },
  retry: {
    match: [/Deadlock/i],
    max: 3,
    backoffBase: 1000,
    backoffExponent: 1.5,
  },
});

export default conn;
