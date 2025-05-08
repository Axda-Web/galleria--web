CREATE TYPE "public"."type" AS ENUM('thumbnail', 'heroSmall', 'heroLarge', 'gallery', 'artist');--> statement-breakpoint
CREATE TABLE "images" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "images_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"paintingId" integer NOT NULL,
	"type" "type" NOT NULL,
	"url" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "paintings" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "paintings_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"artist" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"year" integer NOT NULL,
	"sourceUrl" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "images" ADD CONSTRAINT "images_paintingId_paintings_id_fk" FOREIGN KEY ("paintingId") REFERENCES "public"."paintings"("id") ON DELETE no action ON UPDATE no action;