import { Router } from "express";
import { getApiStatus, getDatabaseHealth, getHealthStatus } from "../controllers/health.controller.js";

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Check that the backend API is running
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: The backend API is running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Backend API is running 🚀
 */
router.get("/", getApiStatus);

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Check API health
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API health status and current timestamp
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
router.get("/api/health", getHealthStatus);

/**
 * @swagger
 * /api/health/db:
 *   get:
 *     summary: Check PostgreSQL connectivity
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: PostgreSQL is connected
 *       503:
 *         description: PostgreSQL is unavailable
 */
router.get("/api/health/db", getDatabaseHealth);

export default router;
