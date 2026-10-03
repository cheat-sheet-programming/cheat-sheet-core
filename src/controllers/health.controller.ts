import type { Request, Response } from "express";
import { prisma } from "../services/prisma.service.js";

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

export async function getDatabaseHealth(_req: Request, res: Response): Promise<void> {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "ok", database: "connected" });
  } catch {
    res.status(503).json({ status: "error", database: "disconnected" });
  }
}
