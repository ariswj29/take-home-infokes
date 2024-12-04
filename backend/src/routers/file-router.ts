import express from "express";
import { getFile, getFileByFolderId } from "../controllers/file-controller";

const router = express.Router();

router.get("/", getFile);
router.get("/:folderId", getFileByFolderId);

export default router;
