-- AlterTable
ALTER TABLE "Anime" ALTER COLUMN "author" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Books" ALTER COLUMN "author" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "author" DROP NOT NULL;
