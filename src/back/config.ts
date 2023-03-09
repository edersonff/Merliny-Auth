import { env } from "process";

export const dbhost = env.DB_HOST ?? "localhost";
export const dbschema = env.DB_SCHEMA ?? "mysql";
export const dbuser = env.DB_USER ?? "root";
export const dbpassword = env.DB_PASSWORD ?? "root";
export const privatekey = env.PRIVATE_KEY ?? "privatekey";
export const debugapp = env.DEBUG_APP ?? true;

export const emailhost = env.EMAIL_HOST ?? "smtp.gmail.com";
export const emailport = env.EMAIL_PORT ?? 587;
export const emailuser = env.EMAIL_USER ?? "emailuser";
export const emailpassword = env.EMAIL_PASSWORD ?? "emailpassword";
export const frontendurl = env.FRONTEND_URL ?? "http://localhost:3000";

export const asaasapitoken = env.ASAAS_API_TOKEN ?? "asaasapitoken";
export const alphavantagetoken = env.ALPHAVANTAGE_TOKEN ?? "alphavantagetoken";
