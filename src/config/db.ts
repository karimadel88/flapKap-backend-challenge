import config from "@mongez/config";
import { env } from "@mongez/dotenv";

config.set({
  db: {
    host: env("DB_HOST", "localhost"),
    port: env("DB_PORT", 5432),
    user: env("DB_USER", "postgres"),
    password: env("DB_PASSWORD", "postgres"),
    database: env("DB_NAME", "vending-machine"),
  },
});

export default config;
