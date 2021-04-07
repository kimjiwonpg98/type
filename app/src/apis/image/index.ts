import { upload } from "../../middlewares/s3";
import * as express from "express";
import ctrl from "./image.ctrl";

const image: express.Router = express.Router();

image.post("/", upload.array("upload", 5), ctrl.upload);
image.delete("/", ctrl.delete);

export default image;
