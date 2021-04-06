import * as express from "express";
import ctrl from "./watch-list.ctrl";

const watchlist: express.Router = express.Router();

watchlist.get("/:studentId", ctrl.findAllByStudentId);
watchlist.delete("/:studentId", ctrl.delete);
watchlist.post("/:studentId", ctrl.update);

export default watchlist;
