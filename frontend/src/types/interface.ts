export interface Folder {
  id: number;
  name: string;
  level: number;
  type: string;
  parentId: number | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
