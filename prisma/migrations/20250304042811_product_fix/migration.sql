/*
  Warnings:

  - The values [SizeM] on the enum `Size` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `title` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Size_new" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');
ALTER TABLE "Product" ALTER COLUMN "sizes" DROP DEFAULT;
ALTER TABLE "Product" ALTER COLUMN "sizes" TYPE "Size_new"[] USING ("sizes"::text::"Size_new"[]);
ALTER TYPE "Size" RENAME TO "Size_old";
ALTER TYPE "Size_new" RENAME TO "Size";
DROP TYPE "Size_old";
ALTER TABLE "Product" ALTER COLUMN "sizes" SET DEFAULT ARRAY[]::"Size"[];
COMMIT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "title" TEXT NOT NULL;
