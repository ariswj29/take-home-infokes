import prisma from "../config/prisma";
import { Request, Response } from "express";

export const getFolder = async (req: Request, res: Response) => {
  try {
    const folder = await prisma.folder.findMany();

    res
      .status(200)
      .json({ message: "Get data folder successfully", data: folder });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getFolderByParentId = async (req: Request, res: Response) => {
  const { parentId } = req.params;

  try {
    const folder = await prisma.folder.findMany({
      where: {
        parentId: parseInt(parentId),
      },
    });

    const file = await prisma.file.findMany({
      where: {
        folderId: parseInt(parentId),
      },
    });

    res.status(200).json({
      message: "Get data folder and file by parent successfully",
      data: { folder, file },
    });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
