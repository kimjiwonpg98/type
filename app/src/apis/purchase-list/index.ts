import * as express from "express";
import ctrl from "./purchase-list.ctrl";

const purchase: express.Router = express.Router();

purchase.get("/:studentId", ctrl.read);
purchase.post("/", ctrl.create);

export default purchase;
