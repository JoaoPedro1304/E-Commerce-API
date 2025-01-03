-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "avatar" BYTEA NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "postalcode" TEXT NOT NULL,
    "profileId" INTEGER,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_profileId_key" ON "Profile"("profileId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
