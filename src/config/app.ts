import config from "@mongez/config";
import { env } from "@mongez/dotenv";

config.set("app.port", env("PORT", 3000));

export default config;
