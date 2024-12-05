import express from "express";
import {
  getBreadcrumb,
  getFolder,
  getFolderByParentId,
} from "../controllers/folder-controller";

const router = express.Router();

router.get("/", getFolder);
router.get("/:parentId", getFolderByParentId);
router.get("/breadcrumb/:parentId", getBreadcrumb);

export default router;
