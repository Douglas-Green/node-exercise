/** @format */

import express from "express";
import userRouter from "./routes/user.route.js";
// TODO: import router from users.route

const router = express.Router();

router.use("/users", userRouter);

router.get("/test", (_req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"

export default router;
