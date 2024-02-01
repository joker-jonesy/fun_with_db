-- CreateTable
CREATE TABLE "sets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 5,
    "tagsId" INTEGER,

    CONSTRAINT "sets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sets_name_key" ON "sets"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- AddForeignKey
ALTER TABLE "sets" ADD CONSTRAINT "sets_tagsId_fkey" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE SET NULL ON UPDATE CASCADE;
