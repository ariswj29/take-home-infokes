"use client";

import { getFolderByParentId } from "@/services/folder";
import { Folder } from "@/types/interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsHdd } from "react-icons/bs";

export default function Home() {
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFolderByParentId("1");
      console.log(response.data);
      setFolders(response.data.folder);
    };

    fetchData();
  }, []);

  return (
    <div className="flex gap-4 p-4">
      {folders.map((folder) => (
        <Link
          key={folder.id}
          href={`/${folder.id}`}
          className="border border-gray-200 hover:bg-cyan-100 hover:cursor-pointer w-44 justify-items-center py-4"
        >
          <BsHdd className="text-blue-500 text-4xl mb-4" size={50} />
          <p className="text-center">{folder.name}</p>
        </Link>
      ))}
    </div>
  );
}
