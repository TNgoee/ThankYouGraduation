import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const guestbookEntriesTable = pgTable("guestbook_entries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  message: text("message").notNull(),
  emoji: text("emoji").notNull().default("🎓"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertGuestbookEntrySchema = createInsertSchema(
  guestbookEntriesTable,
)
  .omit({ id: true, createdAt: true })
  .extend({
    name: z.string().min(1).max(100),
    message: z.string().min(1).max(1000),
    emoji: z.string().max(10).default("🎓"),
  });

export type InsertGuestbookEntry = z.infer<typeof insertGuestbookEntrySchema>;
export type GuestbookEntry = typeof guestbookEntriesTable.$inferSelect;
