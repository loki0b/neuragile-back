import express, { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import cardRoutes from "./routes/cardRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";
import chatRoutes from "src/routes/chatRoutes.js"

import type { Express } from "express";

const app: Express = express();
const port: string | number = process.env["PORT"] || 8080;

const corsOptions = {
  origin: "https://neuragile.vercel.app",
  methods: ['GET', 'POST'],
};

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());
app.use("/api/user", userRoutes);
app.use("/api/cards", cardRoutes);
app.use("/api/collections", collectionRoutes);
app.use("/api/chat", chatRoutes);

if (process.env["NODE_ENV"] === 'development') {
  app.listen(port, () => {
    console.log(`Service running in: http://localhost:${port}`)
  });
}

export default app;