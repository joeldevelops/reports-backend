import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import * as express from "express";
import * as cors from "cors";
import { json } from "body-parser";

import config from "./config";

import * as winston from "winston";
const logger = winston.loggers.add("app-logger", {
  level: config.logLevel,
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

import authController from "./auth/auth.controller.v1";
import usersController from "./users/users.controller.v1";

(async () => {
  let app = express();

  app.use(cors());
  app.use(json());

  app.get("/liveness", (req, res) => res.json("ok"));
  app.get("/readiness", async (req, res) => res.json("ok"));

  app.use("/api/v1", authController, usersController);

  app.listen(config.port, async () => {
    console.log("App running on port: ", config.port);
  });
})();
