/** @format */

import express from "express";
import userRouter from "./user.route.js";

const router = express.Router();

router.use("/users", userRouter);

router.get("/test", (_req, res) => {
  res.send("working");
});

export default router;
