import { loadEnv } from "@mongez/dotenv";
import startApplication from "./general/http/start-application";

loadEnv();

startApplication();
