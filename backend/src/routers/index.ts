import express from "express";
import folderRouter from "./folder-router";
import fileRouter from "./file-router";

const router = express.Router();

router.use("/api/folder", folderRouter);
router.use("/api/file", fileRouter);

export default router;
