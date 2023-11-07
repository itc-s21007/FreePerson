-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "tital" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "poster" BYTEA NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);
