import Link from "next/link";

export default function Breadcrumb() {
  return (
    // buatkan breadcrumb menggunakan tailwind css
    <div className="flex items-center gap-2 py-2 px-2 text-sm border border-slate-400">
      <Link href="/">
        <span className="hover:bg-cyan-100">This PC</span>
      </Link>
      <span>{">"}</span>
      <Link href="/2">
        <span className="hover:bg-cyan-100">Local Disk (C:)</span>
      </Link>
      <span>{">"}</span>
      <Link href="/2/4">
        <span className="hover:bg-cyan-100">Users</span>
      </Link>
    </div>
  );
}
