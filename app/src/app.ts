import * as express from "express";
import * as cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import * as morgan from "morgan";
import logger from "./config/logger";

const app: express.Application = express();
dotenv.config();

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  morgan("tiny", { stream: { write: (message) => logger.info(message) } })
);

import sale from "./apis/sale-list";
import purchase from "./apis/purchase-list";

app.use("/api/sale-list", sale);
app.use("/api/purchase-list", purchase);

export default app;
