"use client";

import { getBreadcrumb } from "@/services/folder";
import { Folder } from "@/types/interface";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Breadcrumb() {
  const params = useParams();
  const [breadcrumbs, setBreadcrumbs] = useState<Folder[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBreadcrumb(params.id as string);
      console.log(response.data);
      setBreadcrumbs(response.data);
    };

    fetchData();
  }, [params.id]);

  return (
    <div className="flex items-center gap-2 py-2 px-2 text-sm border border-slate-400">
      {breadcrumbs.map((breadcrumb, index) => (
        <Link key={index} href={breadcrumb.id === 0 ? "" : `/${breadcrumb.id}`}>
          <span
            className={
              breadcrumb.id === 0 ? "cursor-default" : "hover:bg-cyan-100"
            }
          >
            {breadcrumb.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
