import Breadcrumb from "./Breadcrumb";
import SearchBar from "./SearchBar";
import Sorting from "./Sorting";

export default function Toolbar({
  setSearchQuery,
  setSort,
}: {
  setSearchQuery: (query: string) => void;
  setSort: (sort: string) => void;
}) {
  return (
    <div className="grid grid-cols-5 content-center items-center gap-4 px-4 py-2 h-14 bg-white shadow-sm">
      <div className="col-span-3">
        <Breadcrumb />
      </div>
      <Sorting setSort={setSort} />
      <SearchBar setSearchQuery={setSearchQuery} />
    </div>
  );
}
