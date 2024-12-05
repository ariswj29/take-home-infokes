import { BiSearch } from "react-icons/bi";
import { useState } from "react";

export default function SearchBar({
  setSearchQuery,
}: {
  setSearchQuery: (query: string) => void;
}) {
  const [input, setInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value, "searchbar");
    setInput(value);
    setSearchQuery(value);
  };

  return (
    <div className="flex items-center bg-white shadow-sm border border-slate-400">
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={handleInputChange}
        className="w-full p-[0.4rem] focus:outline-none"
      />
      <BiSearch className="text-slate-400 text-lg m-[10px]" />
    </div>
  );
}
