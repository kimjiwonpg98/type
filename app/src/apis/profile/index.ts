import * as express from "express";
import ctrl from "./profile.ctrl";

const profile: express.Router = express.Router();

profile.get("/:studentId", ctrl.findOneById);
profile.put("/:studentId", ctrl.update);
profile.patch("/:studentId", ctrl.updateImage);

export default profile;
