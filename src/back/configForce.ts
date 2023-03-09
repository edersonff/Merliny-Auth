import { config } from "dotenv";
const env = config().parsed as any;
export const dbhost = env.DB_HOST ?? "localhost";
export const dbschema = env.DB_SCHEMA ?? "mysql";
export const dbuser = env.DB_USER ?? "root";
export const dbpassword = env.DB_PASSWORD ?? "root";
export const privatekey = env.PRIVATE_KEY ?? "privatekey";
export const debugapp = env.DEBUG_APP ?? true;
