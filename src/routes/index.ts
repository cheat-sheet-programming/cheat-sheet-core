import { Router } from "express";
import { getApiStatus, getHealthStatus } from "../controllers/health.controller.js";

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

export default router;
