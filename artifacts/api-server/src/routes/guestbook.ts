import { Router, type IRouter } from "express";
import { db, guestbookEntriesTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import { insertGuestbookEntrySchema } from "@workspace/db";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.get("/guestbook", async (req, res) => {
  try {
    const entries = await db
      .select()
      .from(guestbookEntriesTable)
      .orderBy(desc(guestbookEntriesTable.createdAt));
    res.json(entries);
  } catch (err) {
    logger.error({ err }, "Failed to list guestbook entries");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/guestbook", async (req, res) => {
  const parsed = insertGuestbookEntrySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  try {
    const [entry] = await db
      .insert(guestbookEntriesTable)
      .values(parsed.data)
      .returning();
    res.status(201).json(entry);
  } catch (err) {
    logger.error({ err }, "Failed to create guestbook entry");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
