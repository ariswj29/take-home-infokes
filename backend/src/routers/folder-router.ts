import express from "express";
import {
  getFolder,
  getFolderByParentId,
} from "../controllers/folder-controller";

const router = express.Router();

router.get("/", getFolder);
router.get("/:parentId", getFolderByParentId);

export default router;
