import app from "../app";
import * as express from "express";

const port : number = Number(process.env.PORT) || 8080;
const application : express.Application = app;

application.listen(port, () => console.log(`${port} 포트 오픈`))
.on(`error`, err => console.error(err));