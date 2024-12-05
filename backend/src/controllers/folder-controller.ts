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

export const getBreadcrumb = async (req: Request, res: Response) => {
  const { parentId } = req.params;

  try {
    let breadcrumb: { name: string; id: number }[] = [];
    let currentId = parseInt(parentId);

    while (currentId) {
      // Ambil folder saat ini berdasarkan ID
      const folder = await prisma.folder.findUnique({
        where: { id: currentId },
        select: {
          id: true,
          name: true,
          parentId: true,
        },
      });

      if (!folder) {
        return res.status(404).json({
          message: "Folder not found",
        });
      }

      // Tambahkan folder ke breadcrumb
      breadcrumb.unshift({ name: folder.name, id: folder.id });

      // Perbarui currentId untuk iterasi selanjutnya
      currentId = folder.parentId ?? 0;

      breadcrumb.unshift({ name: ">", id: 0 });
    }

    breadcrumb.shift(); // Hapus elemen pertama dari breadcrumb

    res.status(200).json({
      message: "Get breadcrumb successfully",
      data: breadcrumb, // Kembalikan array objek breadcrumb
    });
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};
