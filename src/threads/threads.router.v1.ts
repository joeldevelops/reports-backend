import { Router } from "express";
import * as winston from "winston";

import { Auth } from "../auth";

import * as threadsService from "./threads.service";
import { ThreadedCommentInput } from "./threads.types";

const logger = winston.loggers.get("app-logger");

const auth = new Auth();
const router = Router();

router.use(auth.validateJwt());

// GET /threads/:parentId
router.get("/:parentId", async (req, res) => {
    try {
        const parentId: number = parseInt(req.params.parentId);
        const threads = await threadsService.getThreadByParentId(parentId);
        res.status(200).send(threads);
    } catch (err) {
        logger.error(err);
        res.status(500).send("Unable to retrieve threads");
    }
});

// POST /threads/:parentId
router.post("/:parentId", async (req, res) => {
    try {
        const parentId: number = parseInt(req.params.parentId);
        const newThread: ThreadedCommentInput = req.body;
        const thread = await threadsService.createThread(parentId, newThread);
        res.status(201).send(thread);
    } catch (err) {
        logger.error(err);
        res.status(500).send("Unable to create thread");
    }
});

export default router;