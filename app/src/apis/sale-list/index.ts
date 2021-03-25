import * as express from "express";
import ctrl from "./sale-list.ctrl";

const sale: express.Router = express.Router();

sale.get("/:studentId", ctrl.read);

export default sale;
