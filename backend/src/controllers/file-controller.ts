import prisma from "../config/prisma";
import { Request, Response } from "express";

export const getFile = async (req: Request, res: Response) => {
  try {
    const file = await prisma.file.findMany();

    res.status(200).json({ message: "Get data file successfully", data: file });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getFileByFolderId = async (req: Request, res: Response) => {
  const { folderId } = req.params;

  try {
    const file = await prisma.file.findMany({
      where: {
        folderId: parseInt(folderId),
      },
    });

    res.status(200).json({
      message: "Get data file by folder successfully",
      data: file,
    });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
