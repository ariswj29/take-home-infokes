import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-white shadow-sm border border-slate-400">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-[0.4rem] focus:outline-none"
      />
      <BiSearch className="text-slate-400 text-lg m-[10px]" />
    </div>
  );
}
