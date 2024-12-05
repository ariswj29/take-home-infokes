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

export interface File {
  id: number;
  name: string;
  size: number;
  path: string;
  type: string;
  folderId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
