import { Router } from "express";
import authV1 from "./auth.router.v1";

const router = Router();

router.use("/v1/auth", authV1);

export * from "./auth.middleware";
export * from "./jwt";
export * from "./auth.types";
export default router;
