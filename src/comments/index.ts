import { Router } from "express";
import commentsV1 from "./comments.router.v1";

const router = Router();

router.use("/v1/comments", commentsV1);

// export * from "./comments.errors";
export * from "./comments.types";
export default router;