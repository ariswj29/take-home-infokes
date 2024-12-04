import prisma from "../src/config/prisma";
import folders from "./data/folders.json";
import files from "./data/files.json";

async function main() {
  for (const folder of folders) {
    await prisma.folder.create({
      data: folder,
    });
  }

  for (const file of files) {
    await prisma.file.create({
      data: file,
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
