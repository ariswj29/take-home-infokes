"use client";

import { getFolders } from "@/services/folder";
import { Folder } from "@/types/interface";
import { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { BsFolder, BsFolder2Open } from "react-icons/bs";
import { FaHdd, FaDesktop } from "react-icons/fa";

export default function Sidebar() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [openFolders, setOpenFolders] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleFolder = (folderId: number) => {
    setOpenFolders((prevState) => ({
      ...prevState,
      [folderId]: !prevState[folderId],
    }));
  };

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await getFolders();
        setFolders(response.data);

        const initialOpenFolders: { [key: number]: boolean } = {};
        response.data.forEach((folder: Folder) => {
          if (folder.level === 0) {
            initialOpenFolders[folder.id] = true;
          }
        });
        setOpenFolders(initialOpenFolders);
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };
    fetchFolders();
  }, []);

  // Get icon based on type
  const getIconByType = (type: string, isOpen: boolean) => {
    switch (type) {
      case "computer":
        return <FaDesktop className="text-blue-500" />;
      case "disk":
        return <FaHdd className="text-blue-500" />;
      case "folder":
        return isOpen ? (
          <BsFolder2Open className="text-blue-500" />
        ) : (
          <BsFolder className="text-blue-500" />
        );
      default:
        return <BsFolder className="text-blue-500" />;
    }
  };

  // Recursive function to render folders
  const renderFolders = (parentId: number | null) => {
    return folders
      .filter((folder) => folder.parentId === parentId)
      .map((folder) => (
        <li key={folder.id}>
          <div
            className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-200 cursor-pointer rounded"
            onClick={() => toggleFolder(folder.id)}
          >
            <span>
              {folders.some((child) => child.parentId === folder.id) ? (
                openFolders[folder.id] ? (
                  <AiOutlineDown />
                ) : (
                  <AiOutlineRight />
                )
              ) : (
                <AiOutlineRight className="invisible" />
              )}
            </span>
            <span>{getIconByType(folder.type, openFolders[folder.id])}</span>
            <span>{folder.name}</span>
          </div>
          {openFolders[folder.id] && (
            <ul className="pl-6">{renderFolders(folder.id)}</ul>
          )}
        </li>
      ));
  };

  return (
    <div className="w-64 h-screen bg-gray-100 border-r border-gray-300">
      {/* Header */}
      <div className="flex items-center justify-center h-14 bg-gray-200 border-b border-gray-300">
        <h1 className="text-lg font-semibold text-gray-700">Explorer</h1>
      </div>

      {/* Folder Structure */}
      <div className="p-2">
        <ul className="text-gray-700">{renderFolders(null)}</ul>
      </div>
    </div>
  );
}
