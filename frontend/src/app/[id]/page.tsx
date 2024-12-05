"use client";

import { getFolderByParentId } from "@/services/folder";
import type { Folder } from "@/types/interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFolder } from "react-icons/bs";
import { useParams } from "next/navigation";
import IconFile from "@/utils/icon-file";
import FilePhoto from "@/utils/file-photo";

export default function Folder() {
  const params = useParams();
  const [folders, setFolders] = useState<Folder[]>([]);
  const [file, setFile] = useState<File[]>([]);
  console.log(params, "params");

  useEffect(() => {
    const fetchData = async () => {
      if (!params?.id) return;
      const response = await getFolderByParentId(params.id as string);
      console.log(response.data);
      setFolders(response.data.folder);
      setFile(response.data.file);
    };

    fetchData();
  }, [params?.id]);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {folders.map((folder) => (
        <Link
          key={folder.id}
          href={`/${folder.id}`}
          className="border border-gray-200 hover:bg-cyan-100 hover:cursor-pointer w-44 justify-items-center py-4"
        >
          <BsFolder className="text-blue-500 text-4xl mb-4" size={50} />
          <p className="text-center">{folder.name}</p>
        </Link>
      ))}
      {file.map((file) => (
        <div
          key={file.id}
          className="border border-gray-200 hover:bg-cyan-100 hover:cursor-pointer w-44 justify-items-center py-4"
        >
          <IconFile type={file.type} />
          <p className="text-center">
            {file.name}.{file.type}
          </p>
        </div>
      ))}
    </div>
  );
}
