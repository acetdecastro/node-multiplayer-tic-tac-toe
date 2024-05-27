import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/test-get", async (req: Request, res: Response) => {
  res.status(200).send("Hello from backend");
});

router.post("/test-post", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  res.status(201).send({
    username,
    password,
  });
});

export const authRouter = router;
