import type { Request, Response } from "express";

export function getApiStatus(_req: Request, res: Response): void {
  res.json({
    message: "Backend API is running 🚀",
  });
}

export function getHealthStatus(_req: Request, res: Response): void {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
}
