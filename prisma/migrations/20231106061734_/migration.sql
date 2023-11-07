-- CreateTable
CREATE TABLE "Move" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "poster" BYTEA NOT NULL,

    CONSTRAINT "Move_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anime" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "poster" BYTEA NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);
