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

import authRouter from "./auth";
import commentsRouter from "./comments";
import usersRouter from "./users";

(async () => {
  let app = express();

  app.use(cors());
  app.use(json());

  app.get("/liveness", (req, res) => res.json("ok"));
  app.get("/readiness", async (req, res) => res.json("ok"));

  app.use("/api", authRouter, usersRouter, commentsRouter);

  app.get("/", (req, res) => res.json("General Kenobi!"));

  app.listen(config.port, async () => {
    logger.info("App running on port: ", config.port);
  });
})();
