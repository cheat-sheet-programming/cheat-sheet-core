import "dotenv/config";

export function getDatabaseUrl(): string {
  const password = process.env.DB_PASSWORD;

  if (!password) {
    throw new Error("DB_PASSWORD is missing. Add it to your .env file.");
  }

  const user = process.env.DB_USER ?? "postgres";
  const host = process.env.DB_HOST ?? "localhost";
  const port = process.env.DB_PORT ?? "5432";
  const database = process.env.DB_NAME ?? "cheat_sheet";

  return `postgresql://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}:${port}/${encodeURIComponent(database)}?schema=public`;
}
