import { Router } from "express";

import * as authService from "./auth.service";

const router = Router();

// POST /auth
router.post("/", async (req, res) => {
  const login = req.body;

  let token;
  try {
    token = await authService.comparePassword(login);
  } catch (e) {
    return res.status(400).send(e.message);
  }

  return res.send(token);
});

export default router;
