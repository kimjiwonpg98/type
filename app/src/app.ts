import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import * as morgan from "morgan";
import logger from "./config/logger";

const app: express.Application = express();
dotenv.config();

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  morgan("tiny", { stream: { write: (message) => logger.info(message) } })
);

import sale from "./apis/sale-list";

app.use("/api/sale-list", sale);

export default app;
