"use client";

import { getFolderByParentId } from "@/services/folder";
import { Folder } from "@/types/interface";
import IconFile from "@/utils/icon-file";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsFolder, BsHdd } from "react-icons/bs";

export default function Home({ searchQuery }: { searchQuery: string }) {
  const params = useParams();
  const [folders, setFolders] = useState<Folder[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  console.log(searchQuery, "search page");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFolderByParentId(
        params.id ? Number(params.id) : 1,
        searchQuery
      );
      console.log(response.data);
      setFolders(response.data.folder);
      setFiles(response.data.file);
    };

    fetchData();
  }, [params?.id, searchQuery]);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {folders.map((folder) => (
        <Link
          key={folder.id}
          href={`/${folder.id}`}
          className="border border-gray-200 hover:bg-cyan-100 hover:cursor-pointer w-44 justify-items-center py-4"
        >
          {folder.parentId === 1 ? (
            <BsHdd className="text-blue-500 text-4xl mb-4" size={50} />
          ) : (
            <BsFolder className="text-blue-500 text-4xl mb-4" size={50} />
          )}
          <p className="text-center">{folder.name}</p>
        </Link>
      ))}
      {files.map((file, index) => (
        <div
          key={index}
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
