import { Router } from "express";
import usersV1 from "./users.router.v1"

const router = Router();

router.use("/v1/users", usersV1);

export * from "./users.errors";
export * from "./users.types";
export default router;
