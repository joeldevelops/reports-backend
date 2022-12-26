import { Router } from "express";
import * as winston from "winston";

import { Auth } from "../auth";

import * as commentsService from "./comments.service";
import { CommentInput } from "./comments.types";

const logger = winston.loggers.get("app-logger");

const auth = new Auth();
const router = Router();

router.use(auth.validateJwt());

// GET /comments
// GET /comments?page=1
router.get("/", auth.isUserOrAdmin(), async (req, res) => {
    try {
        const page: any = req.query.page;
        const comments = await commentsService.getComments(parseInt(page));
        res.status(200).send(comments);
    } catch (err) {
        logger.error(err);
        res.status(500).send("Unable to retrieve comments");
    }
});

// GET /comments/:id
router.get("/:id", auth.isUserOrAdmin(), async (req, res) => {
    try {
        const comment = await commentsService.getCommentById(parseInt(req.params.id));
        res.status(200).send(comment);
    } catch (err) {
        logger.error(err);
        res.status(500).send("Unable to retrieve comment");
    }
});

// POST /comments
router.post("/", auth.isUserOrAdmin(), async (req, res) => {
    try {
        const newComment: CommentInput = req.body;
        const comment = await commentsService.createComment(newComment);
        res.status(201).send(comment);
    } catch (err) {
        logger.error(err);
        res.status(500).send("Unable to create comment");
    }
});

export default router;
