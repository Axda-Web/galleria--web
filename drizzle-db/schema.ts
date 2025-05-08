import {
  integer,
  pgTable,
  varchar,
  text,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";
import { relations, InferSelectModel } from "drizzle-orm";

export const thumbnailTypeEnum = pgEnum("type", [
  "thumbnail",
  "heroSmall",
  "heroLarge",
  "gallery",
  "artist",
]);

export const paintingsTable = pgTable("paintings", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  artist: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  year: integer().notNull(),
  sourceUrl: text().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});

export const imagesTable = pgTable("images", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  paintingId: integer()
    .references(() => paintingsTable.id)
    .notNull(),
  type: thumbnailTypeEnum("type").notNull(),
  url: text().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});

export const paintingsRelations = relations(paintingsTable, ({ many }) => ({
  images: many(imagesTable),
}));

export const imagesRelations = relations(imagesTable, ({ one }) => ({
  painting: one(paintingsTable, {
    fields: [imagesTable.paintingId],
    references: [paintingsTable.id],
  }),
}));

export type Painting = InferSelectModel<typeof paintingsTable>;
export type Image = InferSelectModel<typeof imagesTable>;
