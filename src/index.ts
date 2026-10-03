import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";
import apiRouter from "./routes/index.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 15000;

app.use(cors());
app.use(express.json());
app.get("/api-docs.json", (_req: Request, res: Response) => {
  res.json(swaggerSpec);
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
