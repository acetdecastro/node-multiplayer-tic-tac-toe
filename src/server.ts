import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { authRouter } from "./routes/auth";
import { Server } from "socket.io";
import http from "http";

const PORT = 3001;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

io.on("connection", (socket) => {
  console.log("a user connected");

  // Handle game logic here

  socket.on("joinGame", (gameId) => {
    console.log(`gameId: ${gameId}`);
    socket.join(gameId);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
