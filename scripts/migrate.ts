import { loadEnvConfig } from "@next/env";
import { Client } from "pg";

loadEnvConfig(process.cwd());

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL_UNPOOLED,
  });
  await client.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id BIGSERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      );
    `);
    console.log("Migration complete: contact_submissions table ready.");
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
